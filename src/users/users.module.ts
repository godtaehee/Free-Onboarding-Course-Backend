import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users.entity';
import { UsersQueryRepository } from './users.query.repository';
import { BoardsQueryRepository } from '../boards/boards.query.repository';
import { PaginationHelper } from '../common/utils/pagination.helper';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      User,
      UsersQueryRepository,
      BoardsQueryRepository,
    ]),
  ],
  controllers: [UsersController],
  providers: [UsersService, PaginationHelper],
})
export class UsersModule {}
