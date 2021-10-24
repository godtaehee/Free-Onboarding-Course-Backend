import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BoardsRepository } from './boards.repository';
import { BoardCreateDto } from './dto/board.create.dto';
import { BoardUpdateDto } from './dto/board.update.dto';
import { CommonBoardResponse } from '../common/response/board/common.board.response';
import { BoardSearchRequest } from './dto/board.search.request';
import { BoardsQueryRepository } from './boards.query.repository';
import { Page } from '../common/page';
import { NotIncludeSensitiveInfoBoardResponse } from '../common/response/board/not.include.sensitive.info.board.response';
import { Board } from './boards.entity';
import { PaginationHelper } from '../common/utils/pagination.helper';

@Injectable()
export class BoardsService {
  constructor(
    @InjectRepository(BoardsRepository)
    private boardsRepository: BoardsRepository,
    @InjectRepository(BoardsQueryRepository)
    private boardsQueryRepository: BoardsQueryRepository,
    @Inject(PaginationHelper)
    private paginationHelper: PaginationHelper<NotIncludeSensitiveInfoBoardResponse>,
  ) {}

  createBoard(
    user,
    boardCreateDto: BoardCreateDto,
  ): Promise<CommonBoardResponse> {
    return this.boardsRepository.createBoard(user, boardCreateDto);
  }

  async getSingleBoard(boardId: number): Promise<Board> {
    const result = await this.boardsQueryRepository.getSingleBoardByBoardId(
      boardId,
    );
    if (!result) throw new BadRequestException('잘못된 요청입니다.');
    return result;
  }

  async getBoardListSpecificUser(userId: number) {
    const result = await this.boardsQueryRepository.getBoardListSpecificUser(
      userId,
    );
    if (result.length == 0) throw new BadRequestException('잘못된 요청입니다.');
    return result;
  }

  async getAllBoard(
    query: BoardSearchRequest,
  ): Promise<Page<NotIncludeSensitiveInfoBoardResponse>> {
    const [boards, count] = await this.boardsQueryRepository.getAllBoard(query);

    if (boards.length <= 0)
      throw new BadRequestException(
        `해당 ${query.page}번째 페이지의 게시글이 존재하지 않습니다.`,
      );
    return this.paginationHelper.getPaginationItems<NotIncludeSensitiveInfoBoardResponse>(
      count,
      query.limit,
      boards.map((b) => new NotIncludeSensitiveInfoBoardResponse(b, b.user)),
    );
  }

  async updateBoard(
    userId: number,
    boardId: number,
    updateRequestBody: BoardUpdateDto,
  ): Promise<NotIncludeSensitiveInfoBoardResponse> {
    const selectedBoard = await this.confirmValidBoard(userId, boardId);
    return this.boardsRepository.updateBoard(selectedBoard, updateRequestBody);
  }

  async deleteBoard(
    userId: number,
    boardId: number,
  ): Promise<CommonBoardResponse> {
    await this.confirmValidBoard(userId, boardId);
    await this.boardsRepository.deleteBoard(boardId);
    return {
      boardId,
    };
  }

  async confirmValidBoard(userId, boardId): Promise<Board> {
    const selectedBoard =
      await this.boardsQueryRepository.getSingleBoardSpecificUser(
        userId,
        boardId,
      );

    if (!selectedBoard) throw new BadRequestException('잘못된 요청입니다.');

    return selectedBoard;
  }
}
