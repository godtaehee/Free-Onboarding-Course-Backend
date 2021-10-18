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
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ReadAllBoardResponse } from '../common/response/board/read.all.board.response';
import { PaginationDto } from './dto/pagination.dto';

@ApiTags('게시글')
@Controller('boards')
export class BoardsController {
  constructor(
    private boardsService: BoardsService,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
  ) {}

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

  @Patch('/:boardId')
  @UseGuards(AuthGuard('jwt'))
  async updateBoard(
    @GetUser() user: User,
    @Param('boardId', ParseIntPipe) boardId: number,
    @Body() updateRequestBody: BoardUpdateDto,
  ) {
    return this.boardsService.updateBoard(user.id, boardId, updateRequestBody);
  }

  @Delete('/:boardId')
  @UseGuards(AuthGuard('jwt'))
  async deleteBoard(
    @GetUser() user: User,
    @Param('boardId', ParseIntPipe) boardId: number,
  ) {
    return this.boardsService.deleteBoard(user.id, boardId);
  }
}
