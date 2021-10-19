import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BoardsRepository } from './boards.repository';
import { BoardCreateDto } from './dto/board.create.dto';
import { BoardUpdateDto } from './dto/board.update.dto';
import { CommonBoardResponse } from '../common/response/board/common.board.response';
import { BoardSearchRequest } from './dto/board.search.request';
import { BoardsQueryRepository } from './boards.query.repository';
import { Page } from '../common/page';
import { NotInclueSensitiveBoardInfoResponse } from '../common/response/board/not.inclue.sensitive.board.info.response';

@Injectable()
export class BoardsService {
  constructor(
    @InjectRepository(BoardsRepository)
    private boardsRepository: BoardsRepository,
    @InjectRepository(BoardsQueryRepository)
    private boardsQueryRepository: BoardsQueryRepository,
  ) {}

  createBoard(user, boardCreateDto: BoardCreateDto) {
    return this.boardsRepository.createBoard(user, boardCreateDto);
  }

  async getSingleBoard(boardId: number) {
    const result = await this.boardsQueryRepository.getSingleBoard(boardId);
    if (!result) throw new BadRequestException('잘못된 요청입니다.');
    return result;
  }

  async getAllBoard(query: BoardSearchRequest) {
    const [boards, count] = await this.boardsQueryRepository.getAllBoard(query);

    if (boards.length <= 0)
      throw new BadRequestException(
        `해당 ${query.offset}번째 페이지의 게시글이 존재하지 않습니다.`,
      );
    return new Page<NotInclueSensitiveBoardInfoResponse>(
      count,
      query.limit,
      boards.map((b) => new NotInclueSensitiveBoardInfoResponse(b, b.user)),
    );
  }

  async updateBoard(
    userId: number,
    boardId: number,
    updateRequestBody: BoardUpdateDto,
  ) {
    const selectedBoard = await this.confirmValidBoard(userId, boardId);
    return this.boardsRepository.updateBoard(selectedBoard, updateRequestBody);
  }

  async deleteBoard(userId: number, boardId: number) {
    await this.confirmValidBoard(userId, boardId);
    await this.boardsRepository.deleteBoard(boardId);
    const successResponseBody: CommonBoardResponse = {
      boardId,
    };
    return successResponseBody;
  }

  async confirmValidBoard(userId, boardId) {
    const selectedBoard = await this.boardsQueryRepository.getBoardSpecificUser(
      userId,
      boardId,
    );

    if (!selectedBoard)
      throw new UnauthorizedException('해당 요청을 처리할수 없습니다.');

    return selectedBoard;
  }
}
