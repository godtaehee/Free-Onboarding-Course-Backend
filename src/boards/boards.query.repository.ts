import { EntityRepository, Repository } from 'typeorm';
import { Board } from './boards.entity';
import { BoardSearchRequest } from './dto/board.search.request';

@EntityRepository(Board)
export class BoardsQueryRepository extends Repository<Board> {
  async getSingleBoardByBoardId(boardId: number): Promise<Board> {
    return this.createQueryBuilder('boards')
      .innerJoinAndSelect('boards.user', 'user')
      .select(['boards', 'user.id', 'user.nickname'])
      .where({ id: boardId })
      .getOne();
  }

  async getSingleBoardSpecificUser(
    userId: number,
    boardId: number,
  ): Promise<Board> {
    return this.createQueryBuilder('boards')
      .innerJoinAndSelect('boards.user', 'user')
      .select(['boards', 'user.id', 'user.nickname'])
      .where('user.id = :userId AND boards.id = :boardId', { userId, boardId })
      .getOne();
  }

  getBoardListSpecificUser(userId: number): Promise<Board[]> {
    return this.createQueryBuilder('boards')
      .where('userId = :userId', {
        userId,
      })
      .getMany();
  }

  async getAllBoard(query: BoardSearchRequest): Promise<[Board[], number]> {
    const coveringIndexQueryBuilder = this.createQueryBuilder('covers')
      .innerJoinAndSelect('covers.user', 'user')
      .select('covers.id')
      .orderBy('covers.id', 'DESC')
      .limit(query.getLimit())
      .offset(query.getOffset());

    return this.createQueryBuilder('boards')
      .innerJoin(
        `(${coveringIndexQueryBuilder.getQuery()})`,
        'covers',
        'boards.id = covers_id',
      )
      .innerJoinAndSelect('boards.user', 'user')
      .select(['boards', 'user.id', 'user.nickname'])
      .getManyAndCount();
  }
}
