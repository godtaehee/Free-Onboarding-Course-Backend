import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users.entity';
import { UsersQueryRepository } from './users.query.repository';

@Module({
  imports: [TypeOrmModule.forFeature([User, UsersQueryRepository])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
