import { EntityRepository, Repository } from 'typeorm';
import { Board } from './boards.entity';
import { BoardSearchRequest } from './dto/board.search.request';

@EntityRepository(Board)
export class BoardsQueryRepository extends Repository<Board> {
  async getSingleBoard(boardId: number): Promise<Board> {
    return this.createQueryBuilder('boards')
      .innerJoinAndSelect('boards.user', 'user')
      .select(['boards', 'user.id', 'user.nickname'])
      .where({ id: boardId })
      .getOne();
  }

  async getBoardSpecificUser(userId: number, boardId: number): Promise<Board> {
    return this.createQueryBuilder('boards')
      .innerJoinAndSelect('boards.user', 'user')
      .select(['boards', 'user.id', 'user.nickname'])
      .where('user.id = :userId AND boards.id = :boardId', { userId, boardId })
      .getOne();
  }

  getAllBoard(query: BoardSearchRequest): Promise<[Board[], number]> {
    return this.createQueryBuilder('boards')
      .innerJoinAndSelect('boards.user', 'user')
      .select(['boards', 'user.id', 'user.nickname'])
      .orderBy('boards.id', 'DESC')
      .limit(query.getLimit())
      .offset(query.getOffset())
      .getManyAndCount();
  }
}
