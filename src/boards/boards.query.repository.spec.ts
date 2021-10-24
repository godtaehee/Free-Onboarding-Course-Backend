import { Test, TestingModule } from '@nestjs/testing';
import { BoardsQueryRepository } from './boards.query.repository';
import { AppModule } from '../app.module';

describe('boards.query.repository', () => {
  let queryRepository: BoardsQueryRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    queryRepository = module.get<BoardsQueryRepository>(BoardsQueryRepository);
  });

  it('커버링 인덱스 적용하지 않은 경우', async () => {
    const boardsQueryBuilder = queryRepository
      .createQueryBuilder('boards')
      .innerJoin('boards.user', 'user')
      .orderBy('boards.boardId', 'DESC')
      .limit(50)
      .offset(100000); // 숫자 사용자 정의대로 변경

    const result = await boardsQueryBuilder.getMany();

    expect(result).toBeTruthy();
  });

  it('커버링 인덱스 적용한경우', async () => {
    const coveringIndexQueryBuilder = queryRepository
      .createQueryBuilder('covers')
      .select(['covers.boardId'])
      .orderBy('covers.boardId', 'DESC')
      .limit(50)
      .offset(100000); // 숫자 사용자 정의대로 변경

    const boards = await queryRepository
      .createQueryBuilder('boards')
      .innerJoin(
        `(${coveringIndexQueryBuilder.getQuery()})`,
        'covers',
        'boards.boardId = covers.covers_id',
      )
      .innerJoinAndSelect('boards.user', 'user')
      .select(['boards', 'user.userId', 'user.nickname'])
      .getMany();

    expect(boards).toBeTruthy();
  });
});
