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
        success: true,
        boardId: savedBoard.id,
      };
    } catch (err) {
      throw err;
    }
  }

  async getSingleBoard(boardId: number) {
    return this.createQueryBuilder('boards')
      .innerJoinAndSelect('boards.user', 'user')
      .select(['boards', 'user.id', 'user.nickname'])
      .where({ id: boardId })
      .getOne();
  }

  async getBoardSpecificUser(userId: number, boardId: number) {
    return this.createQueryBuilder('boards')
      .innerJoinAndSelect('boards.user', 'user')
      .select(['boards', 'user.id', 'user.nickname'])
      .where('user.id = :userId AND boards.id = :boardId', { userId, boardId })
      .getOne();
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
