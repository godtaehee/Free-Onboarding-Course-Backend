import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersQueryRepository } from './users.query.repository';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersQueryRepository)
    private usersQueryRepository: UsersQueryRepository,
  ) {}

  getSingleUserInfo(userId: number) {
    return this.usersQueryRepository.getSingleUserInfo(userId);
  }
}
