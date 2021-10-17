import {
  Body,
  Controller,
  Get,
  Inject,
  Logger,
  Param,
  Post,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from '../common/decorators/get-user.decorator';
import { BoardsService } from './boards.service';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { BoardCreateDto } from './dto/board.create.dto';

@UseGuards(AuthGuard('jwt'))
@Controller('boards')
export class BoardsController {
  constructor(
    private boardsService: BoardsService,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
  ) {}

  @Post('/create')
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

  @Get('/:board-id')
  getSingleBoard(@Param('board-id') boardId: number) {
    return this.boardsService.getSingleBoard(boardId);
  }
}
