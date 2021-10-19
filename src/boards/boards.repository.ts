import { EntityRepository, Repository } from 'typeorm';
import { Board } from './boards.entity';
import { BoardCreateDto } from './dto/board.create.dto';
import { BoardUpdateDto } from './dto/board.update.dto';

@EntityRepository(Board)
export class BoardsRepository extends Repository<Board> {
  async createBoard(user, boardCreateDto: BoardCreateDto) {
    const { title, content } = boardCreateDto;

    const createdBoard = this.create({
      title,
      content,
      user,
    });
    try {
      const savedBoard = await this.save(createdBoard);
      return {
        boardId: savedBoard.id,
      };
    } catch (err) {
      throw err;
    }
  }

  async updateBoard(board: Board, updateRequestBody: BoardUpdateDto) {
    const { title, content } = updateRequestBody;

    board.title = title;
    board.content = content;

    return await this.save(board);
  }

  async deleteBoard(boardId: number) {
    return this.createQueryBuilder('boards')
      .softDelete()
      .where('id = :boardId', {
        boardId,
      })
      .execute();
  }
}
