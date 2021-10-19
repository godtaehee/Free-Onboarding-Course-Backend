import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Logger,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
  UseInterceptors,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from '../common/decorators/get-user.decorator';
import { BoardsService } from './boards.service';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { BoardCreateDto } from './dto/board.create.dto';
import { BoardUpdateDto } from './dto/board.update.dto';
import { User } from '../users/users.entity';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { BoardSearchRequest } from './dto/board.search.request';
import { CommonBoardResponse } from '../common/response/board/common.board.response';
import { NotInclueSensitiveBoardInfoResponse } from '../common/response/board/not.inclue.sensitive.board.info.response';
import { PositiveNumberValidationPipe } from '../common/pipe/positive.number.validation.pipe';
import { CommonResponseFormInterceptor } from '../common/interceptors/common.response.form.interceptor';
import { ApiCommonCreateResponseForm } from '../common/decorators/api.common.create.response.form';
import { ApiCommonOkResponseForm } from '../common/decorators/api.common.Ok.response.form';
import { Page } from '../common/page';

@ApiTags('게시글')
@Controller('boards')
export class BoardsController {
  constructor(
    private boardsService: BoardsService,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
  ) {
    this.tag = '[BoardsController]';
  }

  tag: string;

  @ApiBearerAuth('access-token')
  @ApiOperation({
    summary: '게시글을 생성합니다.',
    description: '회원가입을 한 유저만 게시글을 작성할수 있습니다.',
  })
  @ApiCommonCreateResponseForm(CommonBoardResponse, {
    description: '성공적으로 Board를 생성했을때의 응답입니다.',
  })
  @Post('/create')
  @UseGuards(AuthGuard('jwt'))
  @UseInterceptors(CommonResponseFormInterceptor)
  createBoard(
    @GetUser() user,
    @Body(ValidationPipe) boardCreateDto: BoardCreateDto,
  ) {
    this.logger.debug(
      `${this.tag} ${new Date().toLocaleString()} userId: '${
        user.id
      }' request board-create`,
    );
    return this.boardsService.createBoard(user, boardCreateDto);
  }

  @ApiOperation({
    summary: '게시글의 id를 기준으로 읽습니다.',
    description: '한개의 게시물을 읽어옵니다.',
  })
  @ApiParam({
    name: 'boardId',
    required: true,
    description: '읽어올 게시글의 고유 번호입니다.',
  })
  @ApiCommonOkResponseForm(NotInclueSensitiveBoardInfoResponse, {
    description: '성공적으로 Board를 가져왔을때의 응답입니다.',
  })
  @UseInterceptors(CommonResponseFormInterceptor)
  @Get('/:boardId')
  getSingleBoard(
    @Param('boardId', PositiveNumberValidationPipe) boardId: number,
  ) {
    this.logger.debug(
      `${this.tag} ${new Date()} '${boardId}'번째 게시물을 읽어옵니다.`,
    );
    return this.boardsService.getSingleBoard(boardId);
  }

  @ApiOperation({
    summary: '게시글을 최대 limit개 단위로 가져옵니다. (Pagination)',
    description:
      '게시글을 최대 limit개 단위로 가져옵니다. Pagination을 구현하실때 사용하실수 있습니다. ' +
      '삭제된 게시글은 가져올수 없습니다.',
  })
  @ApiQuery({
    name: 'limit',
    required: true,
    description: '최대 몇개의 Board를 가져올것인지에 대한 값입니다.',
  })
  @ApiQuery({
    name: 'offset',
    required: true,
    description:
      '게시판의 시작페이지의 수를 나타냅니다. 0을 제외한 양수의 값입니다.',
  })
  @Get('/')
  getAllBoard(
    @Query(new ValidationPipe({ transform: true })) query: BoardSearchRequest,
  ): Promise<Page<NotInclueSensitiveBoardInfoResponse>> {
    this.logger.debug(
      `${this.tag} ${new Date()} ${
        (query.offset - 1) * query.limit
      }번째부터 최대 '${query.limit}'개의 게시물을 읽어옵니다.`,
    );
    return this.boardsService.getAllBoard(query);
  }

  @ApiBearerAuth('access-token')
  @ApiOperation({
    summary: '게시글을 업데이트 합니다.',
    description:
      '자신이 작성한 게시글만 업데이트 할수있으며, 발급받은 Access-Token을 이용해 업데이트 권한을 인가받습니다.',
  })
  @ApiParam({
    name: 'boardId',
    required: true,
    description: '수정할 게시글의 고유 번호입니다.',
  })
  @ApiCommonOkResponseForm(NotInclueSensitiveBoardInfoResponse, {
    description:
      '성공적으로 Board를 업데이트 했을때의 응답입니다. 업데이트 후의 Board의 상태를 응답합니다.',
  })
  @Patch('/:boardId')
  @UseGuards(AuthGuard('jwt'))
  @UseInterceptors(CommonResponseFormInterceptor)
  async updateBoard(
    @GetUser() user: User,
    @Param('boardId', PositiveNumberValidationPipe) boardId: number,
    @Body() updateRequestBody: BoardUpdateDto,
  ) {
    this.logger.debug(
      `${this.tag} ${new Date()} '${boardId}'번 아이디의 게시물을 제목은 ${
        updateRequestBody.title
      }, 내용은 ${updateRequestBody.content.substr(10)}..으로 수정하겠습니다.`,
    );
    return this.boardsService.updateBoard(user.id, boardId, updateRequestBody);
  }

  @ApiBearerAuth('access-token')
  @ApiOperation({
    summary: '게시글을 삭제합니다.',
    description:
      '자신이 작성한 게시글만 삭제 할수있으며, 발급받은 Access-Token을 이용해 업데이트 권한을 인가받습니다. Soft-Delete 정책을 사용했습니다.',
  })
  @ApiParam({
    name: 'boardId',
    required: true,
    description: '삭제할 게시글의 고유 번호입니다.',
  })
  @ApiCommonOkResponseForm(CommonBoardResponse, {
    description: '성공적으로 Board를 삭제했을때 응답입니다.',
  })
  @Delete('/:boardId')
  @UseGuards(AuthGuard('jwt'))
  @UseInterceptors(CommonResponseFormInterceptor)
  async deleteBoard(
    @GetUser() user: User,
    @Param('boardId', PositiveNumberValidationPipe) boardId: number,
  ) {
    this.logger.debug(
      `${
        this.tag
      } ${new Date()} '${boardId}'번 아이디의 게시물을 삭제하겠습니다.`,
    );
    return this.boardsService.deleteBoard(user.id, boardId);
  }
}
