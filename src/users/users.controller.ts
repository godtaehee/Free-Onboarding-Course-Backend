import { Controller, Get, Param, Query, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserSearchRequest } from './dto/user.search.request';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('/:userId')
  async getSingleUserInfo(@Param('userId') userId: number) {
    return this.usersService.getSingleUserInfo(userId);
  }

  @Get('/')
  getAllUserInfoUsingPagination(
    @Query(new ValidationPipe({ transform: true }))
    userSearchRequest: UserSearchRequest,
  ) {
    return this.usersService.getAllUserInfoUsingPagination(userSearchRequest);
  }
}
