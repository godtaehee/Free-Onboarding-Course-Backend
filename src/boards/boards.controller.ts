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

  @Get('/')
  getAllBoard(@Query() query) {
    this.logger.debug(query);
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
