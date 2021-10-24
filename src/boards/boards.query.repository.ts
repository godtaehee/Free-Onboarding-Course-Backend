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
    const paginationBoards = this.getPaginationBoards(
      query.getOffset(),
      query.getLimit(),
    );

    if (query.getOffset() === 0) {
      const fixedPageCount = 10 * query.getLimit();
      return [await paginationBoards, fixedPageCount];
    }

    const totalCount = await this.createQueryBuilder('covers')
      .select(['covers.boardId'])
      .getCount();

    if (totalCount > query.getOffset()) {
      return [await paginationBoards, totalCount];
    }

    return [
      await this.getPaginationBoards(
        Math.ceil(totalCount / query.getOffset()) - 1,
        query.getLimit(),
      ),
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

  getPaginationBoards(offset: number, limit: number) {
    return this.createQueryBuilder('boards')
      .innerJoin(
        `(${this.getCoveringIndexQueryBuilder(offset, limit).getQuery()})`,
        'covers',
        'boards.boardId = covers.covers_id',
      )
      .innerJoinAndSelect('boards.user', 'user')
      .select(['boards', 'user.userId', 'user.nickname'])
      .getMany();
  }
}
