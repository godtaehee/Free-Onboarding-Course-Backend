import { EntityRepository, Repository, UpdateResult } from 'typeorm';
import { Board } from './boards.entity';
import { BoardCreateDto } from './dto/board.create.dto';
import { BoardUpdateDto } from './dto/board.update.dto';
import { CommonBoardResponse } from '../common/response/board/common.board.response';
import { NotIncludeSensitiveInfoBoardResponse } from '../common/response/board/not.include.sensitive.info.board.response';

@EntityRepository(Board)
export class BoardsRepository extends Repository<Board> {
  async createBoard(
    user,
    boardCreateDto: BoardCreateDto,
  ): Promise<CommonBoardResponse> {
    const { title, content } = boardCreateDto;

    const createdBoard = this.create({
      title,
      content,
      user,
    });
    try {
      const savedBoard = await this.save(createdBoard);
      return {
        boardId: savedBoard.boardId,
      };
    } catch (err) {
      throw err;
    }
  }

  async updateBoard(
    board: Board,
    updateRequestBody: BoardUpdateDto,
  ): Promise<NotIncludeSensitiveInfoBoardResponse> {
    const { title, content } = updateRequestBody;

    board.title = title;
    board.content = content;

    await this.save(board);

    return new NotIncludeSensitiveInfoBoardResponse(board, board.user);
  }

  async deleteBoard(boardId: number): Promise<UpdateResult> {
    return this.createQueryBuilder('boards')
      .softDelete()
      .where('id = :boardId', {
        boardId,
      })
      .execute();
  }
}
