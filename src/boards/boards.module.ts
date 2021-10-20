import { Module } from '@nestjs/common';
import { BoardsController } from './boards.controller';
import { BoardsService } from './boards.service';
import { AuthModule } from '../auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardsRepository } from './boards.repository';
import { BoardsQueryRepository } from './boards.query.repository';
import { PaginationHelper } from '../common/utils/pagination.helper';

@Module({
  imports: [
    TypeOrmModule.forFeature([BoardsRepository, BoardsQueryRepository]),
    AuthModule,
  ],
  controllers: [BoardsController],
  providers: [BoardsService, PaginationHelper],
})
export class BoardsModule {}
