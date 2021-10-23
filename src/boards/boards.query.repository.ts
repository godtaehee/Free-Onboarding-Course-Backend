import { EntityRepository, Repository } from 'typeorm';
import { Board } from './boards.entity';
import { BoardSearchRequest } from './dto/board.search.request';

@EntityRepository(Board)
export class BoardsQueryRepository extends Repository<Board> {
  getSingleBoardByBoardId(boardId: number): Promise<Board> {
    return this.createQueryBuilder('boards')
      .innerJoinAndSelect('boards.user', 'user')
      .select(['boards', 'user.userId', 'user.nickname'])
      .where('boards.boardId = :boardId', { boardId })
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

  async getAllBoard(query: BoardSearchRequest): Promise<[Board[], number]> {
    if (query.getOffset() === 0) {
      const fixedPageCount = 10 * query.getLimit();
      return [
        await this.getBoardsQueryBuilder(0, query.getLimit()).getMany(),
        fixedPageCount,
      ];
    }

    const totalCount = await this.createQueryBuilder('covers')
      .select(['covers.boardId'])
      .getCount();

    if (totalCount > query.getOffset()) {
      return [
        await this.getBoardsQueryBuilder(
          query.getOffset(),
          query.getLimit(),
        ).getMany(),
        totalCount,
      ];
    }

    return [
      await this.createQueryBuilder('boards')
        .innerJoin(
          `(${this.getCoveringIndexQueryBuilder(
            Math.ceil(totalCount / query.getOffset()) - 1,
            query.getLimit(),
          ).getQuery()})`,
          'covers',
          'boards.boardId = covers.covers_id',
        )
        .innerJoinAndSelect('boards.user', 'user')
        .select(['boards', 'user.userId', 'user.nickname'])
        .getMany(),
      totalCount,
    ];
  }

  getCoveringIndexQueryBuilder(offset: number, limit: number) {
    return this.createQueryBuilder('covers')
      .select(['covers.boardId'])
      .orderBy('covers.boardId', 'DESC')
      .limit(limit)
      .offset(offset);
  }

  getBoardsQueryBuilder(offset: number, limit: number) {
    return this.createQueryBuilder('boards')
      .innerJoin(
        `(${this.getCoveringIndexQueryBuilder(offset, limit).getQuery()})`,
        'covers',
        'boards.boardId = covers.covers_id',
      )
      .innerJoinAndSelect('boards.user', 'user')
      .select(['boards', 'user.userId', 'user.nickname']);
  }
}
