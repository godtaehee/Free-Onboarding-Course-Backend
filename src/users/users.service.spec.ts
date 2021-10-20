import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { UsersQueryRepository } from './users.query.repository';

const mockQueryRepository = {
  create: jest.fn(),
  save: jest.fn(),
};
describe('UsersService', () => {
  let service: UsersService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: UsersQueryRepository,
          useValue: mockQueryRepository,
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
