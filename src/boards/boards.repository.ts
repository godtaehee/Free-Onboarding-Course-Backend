import { EntityRepository, Repository } from 'typeorm';
import { Board } from './boards.entity';
import { BoardCreateDto } from './dto/board.create.dto';

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
      .where({ boardId })
      .getOne();
  }
}
