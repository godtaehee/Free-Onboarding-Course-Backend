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
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { BoardSearchRequest } from './dto/board.search.request';
import { CommonBoardResponse } from '../common/response/board/common.board.response';
import { NotIncludeSensitiveBoardInfoResponse } from '../common/response/board/not.include.sensitive.board.info.response';
import { PositiveNumberValidationPipe } from '../common/pipe/positive.number.validation.pipe';
import { CommonResponseFormInterceptor } from '../common/interceptors/common.response.form.interceptor';
import { ApiCommonCreateResponseForm } from '../common/decorators/api.common.create.response.form';
import { ApiCommonOkResponseForm } from '../common/decorators/api.common.Ok.response.form';
import { Page } from '../common/page';
import { FourHundredOneError } from '../common/response/error/four.hundred.one.error';
import { FourHundredError } from '../common/response/error/four.hundred.error';
import { NotValidNumberError } from '../common/response/error/not.valid.number.error';
import { Board } from './boards.entity';
import { ApiCommonPaginationOkResponseForm } from '../common/decorators/pagination/api.common.Ok.response.form';
import { NotIncludeUserInfoResponse } from '../common/response/board/not.include.user.info.response';
import { ApiCommonOkArrayResponseForm } from '../common/decorators/api.common.ok.array.response.form';

@Controller('boards')
export class BoardsController {
  constructor(
    private boardsService: BoardsService,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
  ) {
    this.tag = '[BoardsController]';
  }

  tag: string;

  @ApiTags('In-Memory Database 확인용')
  @ApiQuery({
    name: 'id',
    required: true,
    description: '특정 유저가 작성한 게시글을 가져오기 위한 유저의 id 입니다.',
  })
  @ApiOperation({
    summary: '특정 유저의 작성 게시글을 가져옵니다.',
    description: '회원가입을 한 유저의 게시글만 가져올 수 있습니다.',
  })
  @ApiCommonOkArrayResponseForm(NotIncludeUserInfoResponse)
  @UseInterceptors(CommonResponseFormInterceptor)
  @Get('/user')
  getBoardListSpecificUser(@Query('id') userId: number) {
    return this.boardsService.getBoardListSpecificUser(userId);
  }

  @ApiTags('게시글')
  @ApiBearerAuth('access-token')
  @ApiOperation({
    summary: '게시글을 생성합니다.',
    description: '회원가입을 한 유저만 게시글을 작성할 수 있습니다.',
  })
  @ApiCommonCreateResponseForm(CommonBoardResponse, {
    description: '성공적으로 Board를 생성했을 때의 응답입니다.',
  })
  @ApiBadRequestResponse({
    type: FourHundredError,
  })
  @ApiUnauthorizedResponse({
    type: FourHundredOneError,
  })
  @Post('/create')
  @UseGuards(AuthGuard('jwt'))
  @UseInterceptors(CommonResponseFormInterceptor)
  createBoard(
    @GetUser() user,
    @Body(ValidationPipe) boardCreateDto: BoardCreateDto,
  ): Promise<CommonBoardResponse> {
    this.logger.debug(
      `${this.tag} ${new Date().toLocaleString()} userId: '${
        user.id
      }' request board-create`,
    );
    return this.boardsService.createBoard(user, boardCreateDto);
  }

  @ApiTags('게시글')
  @ApiBearerAuth('access-token')
  @ApiOperation({
    summary: '게시글을 업데이트합니다.',
    description:
      '자신이 작성한 게시글만 업데이트 할 수 있으며, 발급받은 Access-Token을 이용해 업데이트 권한을 인가받습니다.',
  })
  @ApiParam({
    name: 'boardId',
    required: true,
    description: '수정할 게시글의 고유 번호입니다.',
  })
  @ApiCommonOkResponseForm(NotIncludeSensitiveBoardInfoResponse, {
    description:
      '성공적으로 Board를 업데이트 했을 때의 응답입니다. 업데이트 후의 Board의 상태를 응답합니다.',
  })
  @ApiBadRequestResponse({
    type: NotValidNumberError,
  })
  @ApiUnauthorizedResponse({
    type: FourHundredOneError,
  })
  @Patch('/:boardId')
  @UseGuards(AuthGuard('jwt'))
  @UseInterceptors(CommonResponseFormInterceptor)
  async updateBoard(
    @GetUser() user: User,
    @Param('boardId', PositiveNumberValidationPipe) boardId: number,
    @Body() updateRequestBody: BoardUpdateDto,
  ): Promise<Board> {
    this.logger.debug(
      `${this.tag} ${new Date()} '${boardId}'번 아이디의 게시물을 제목은 ${
        updateRequestBody.title
      }, 내용은 ${updateRequestBody.content.substr(10)}..으로 수정하겠습니다.`,
    );
    return this.boardsService.updateBoard(
      user.userId,
      boardId,
      updateRequestBody,
    );
  }

  @ApiTags('게시글')
  @ApiBearerAuth('access-token')
  @ApiOperation({
    summary: '게시글을 삭제합니다.',
    description:
      '자신이 작성한 게시글만 삭제 할 수 있으며, 발급받은 Access-Token을 이용해 업데이트 권한을 인가받습니다. Soft-Delete 정책을 사용했습니다.',
  })
  @ApiParam({
    name: 'boardId',
    required: true,
    description: '삭제할 게시글의 고유 번호입니다.',
  })
  @ApiCommonOkResponseForm(CommonBoardResponse, {
    description: '성공적으로 Board를 삭제했을 때 응답입니다.',
  })
  @Delete('/:boardId')
  @UseGuards(AuthGuard('jwt'))
  @UseInterceptors(CommonResponseFormInterceptor)
  @ApiBadRequestResponse({
    type: NotValidNumberError,
  })
  @ApiUnauthorizedResponse({
    type: FourHundredOneError,
  })
  async deleteBoard(
    @GetUser() user: User,
    @Param('boardId', PositiveNumberValidationPipe) boardId: number,
  ): Promise<CommonBoardResponse> {
    this.logger.debug(
      `${
        this.tag
      } ${new Date()} '${boardId}'번 아이디의 게시물을 삭제하겠습니다.`,
    );
    return this.boardsService.deleteBoard(user.userId, boardId);
  }

  @ApiTags('게시글')
  @ApiOperation({
    summary: '게시글의 id를 기준으로 읽습니다.',
    description: '한 개의 게시물을 읽어옵니다.',
  })
  @ApiParam({
    name: 'boardId',
    required: true,
    description: '읽어올 게시글의 고유 번호입니다.',
  })
  @ApiCommonOkResponseForm(NotIncludeSensitiveBoardInfoResponse, {
    description: '성공적으로 Board를 가져왔을 때의 응답입니다.',
  })
  @ApiBadRequestResponse({
    type: NotValidNumberError,
  })
  @UseInterceptors(CommonResponseFormInterceptor)
  @Get('/:boardId')
  getSingleBoard(
    @Param('boardId', PositiveNumberValidationPipe) boardId: number,
  ): Promise<Board> {
    this.logger.debug(
      `${this.tag} ${new Date()} '${boardId}'번째 게시물을 읽어옵니다.`,
    );
    return this.boardsService.getSingleBoard(boardId);
  }

  @ApiTags('게시글')
  @ApiOperation({
    summary: '게시글을 최대 limit 개 단위로 가져옵니다. (Pagination)',
    description:
      '게시글을 최대 limit 개 단위로 가져옵니다. Pagination을 구현하실 때 사용하실 수 있습니다.' +
      '삭제된 게시글은 가져올 수 없습니다. 최신 -> 과거순으로 Board를 가져옵니다.',
  })
  @ApiQuery({
    name: 'limit',
    required: true,
    description: '최대 몇 개의 Board를 가져올 것인지에 대한 값입니다.',
  })
  @ApiQuery({
    name: 'offset',
    required: true,
    description:
      '게시판의 시작페이지의 수를 나타냅니다. 0을 제외한 양수의 값입니다.',
  })
  @ApiCommonPaginationOkResponseForm(NotIncludeSensitiveBoardInfoResponse, {
    description:
      '유저의 패스워드와 같은 민감한 정보를 포함하지 않는 Board의 응답입니다.',
  })
  @ApiBadRequestResponse({
    type: NotValidNumberError,
  })
  @Get('/')
  getAllBoard(
    @Query(new ValidationPipe({ transform: true })) query: BoardSearchRequest,
  ): Promise<Page<NotIncludeSensitiveBoardInfoResponse>> {
    this.logger.debug(
      `${this.tag} ${new Date()} ${
        (query.offset - 1) * query.limit
      }번째부터 최대 '${query.limit}'개의 게시물을 읽어옵니다.`,
    );
    return this.boardsService.getAllBoard(query);
  }
}
