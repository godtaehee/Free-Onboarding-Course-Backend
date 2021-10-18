import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Logger,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  UseGuards,
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
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ReadAllBoardResponse } from '../common/response/board/read.all.board.response';
import { PaginationDto } from './dto/pagination.dto';
import { CommonBoardResponse } from '../common/response/board/common.board.response';
import { NotInclueSensitiveBoardInfoResponse } from '../common/response/board/not.inclue.sensitive.board.info.response';

@ApiTags('게시글')
@Controller('boards')
export class BoardsController {
  constructor(
    private boardsService: BoardsService,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
  ) {}

  @ApiBearerAuth('access-token')
  @ApiOperation({
    summary: '게시글을 생성합니다.',
    description: '회원가입을 한 유저만 게시글을 작성할수 있습니다.',
  })
  @ApiResponse({
    status: 201,
    description: '성공적으로 Board를 생성했을때의 응답입니다.',
    type: CommonBoardResponse,
  })
  @Post('/create')
  @UseGuards(AuthGuard('jwt'))
  createBoard(
    @GetUser() user,
    @Body(ValidationPipe) boardCreateDto: BoardCreateDto,
  ) {
    this.logger.debug(
      `${new Date().toLocaleString()} userId: '${
        user.id
      }' request board-create`,
    );
    return this.boardsService.createBoard(user, boardCreateDto);
  }

  @Get('/:boardId')
  getSingleBoard(@Param('boardId') boardId: number) {
    return this.boardsService.getSingleBoard(boardId);
  }

  @ApiOperation({
    summary: '게시글을 limit개 단위로 가져옵니다. (Pagination)',
    description:
      '게시글을 limit개 단위로 가져옵니다. Pagination을 구현하실때 사용하실수 있습니다.',
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
  @ApiResponse({
    status: 201,
    description: '성공적으로 Board를 가져왔을때의 응답입니다.',
    type: ReadAllBoardResponse,
  })
  @Get('/')
  getAllBoard(
    @Query(ValidationPipe) query: PaginationDto,
  ): Promise<ReadAllBoardResponse> {
    return this.boardsService.getAllBoard(query.limit, query.offset);
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
  @ApiResponse({
    status: 200,
    description: '성공적으로 Board를 가져왔을때의 응답입니다.',
    type: NotInclueSensitiveBoardInfoResponse,
  })
  @Patch('/:boardId')
  @UseGuards(AuthGuard('jwt'))
  async updateBoard(
    @GetUser() user: User,
    @Param('boardId', ParseIntPipe) boardId: number,
    @Body() updateRequestBody: BoardUpdateDto,
  ) {
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
  @ApiResponse({
    status: 201,
    description: '성공적으로 Board를 삭제했을때 응답입니다.',
    type: CommonBoardResponse,
  })
  @Delete('/:boardId')
  @UseGuards(AuthGuard('jwt'))
  async deleteBoard(
    @GetUser() user: User,
    @Param('boardId', ParseIntPipe) boardId: number,
  ) {
    return this.boardsService.deleteBoard(user.id, boardId);
  }
}
