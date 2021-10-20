import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('/:userId')
  async getSingleUserInfo(@Param('userId') userId: number) {
    return this.usersService.getSingleUserInfo(userId);
  }
}
