import {
  Body,
  Controller,
  Get,
  Inject,
  Logger,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from '../common/decorators/get-user.decorator';
import { BoardsService } from './boards.service';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { BoardCreateDto } from './dto/board.create.dto';
import { BoardUpdateDto } from './dto/board.update.dto';

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

  @Patch('/:boardId')
  @UseGuards(AuthGuard('jwt'))
  async updateBoard(
    @GetUser() user,
    @Param('boardId', ParseIntPipe) boardId: number,
    @Body() updateRequestBody: BoardUpdateDto,
  ) {
    return this.boardsService.updateBoard(user.id, boardId, updateRequestBody);
  }
}
