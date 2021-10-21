import { EntityRepository, Repository } from 'typeorm';
import { Board } from './boards.entity';
import { BoardSearchRequest } from './dto/board.search.request';

@EntityRepository(Board)
export class BoardsQueryRepository extends Repository<Board> {
  getSingleBoardByBoardId(boardId: number): Promise<Board> {
    return this.createQueryBuilder('boards')
      .innerJoinAndSelect('boards.user', 'user')
      .select(['boards', 'user.userId', 'user.nickname'])
      .where({ boardId })
      .getOne();
  }

  getSingleBoardSpecificUser(userId: number, boardId: number): Promise<Board> {
    return this.createQueryBuilder('boards')
      .innerJoinAndSelect('boards.user', 'user')
      .select(['boards', 'user.userId', 'user.nickname'])
      .where('user.id = :userId AND boards.id = :boardId', { userId, boardId })
      .getOne();
  }

  getBoardListSpecificUser(userId: number): Promise<Board[]> {
    return this.createQueryBuilder('boards')
      .where('user_id = :userId', {
        userId,
      })
      .getMany();
  }

  getAllBoard(query: BoardSearchRequest): Promise<[Board[], number]> {
    const coveringIndexQueryBuilder = this.createQueryBuilder('covers')
      .select('covers.id')
      .orderBy('covers.id', 'DESC')
      .limit(query.getLimit())
      .offset(query.getOffset());

    return this.createQueryBuilder('boards')
      .innerJoin(
        `(${coveringIndexQueryBuilder.getQuery()})`,
        'covers',
        'boards.id = covers.id',
      )
      .innerJoinAndSelect('boards.user', 'user')
      .select(['boards', 'user.userId', 'user.nickname'])
      .getManyAndCount();
  }
}
