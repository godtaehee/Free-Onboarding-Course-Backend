import { Controller, Get, Param, Query, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserSearchRequest } from './dto/user.search.request';
import { ApiQuery } from '@nestjs/swagger';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('/:userId')
  async getSingleUserInfo(@Param('userId') userId: number) {
    return this.usersService.getSingleUserInfo(userId);
  }

  @ApiQuery({
    name: 'limit',
    required: true,
    description: '최대 몇개의 User 정보를 가져올것인지에 대한 값입니다.',
  })
  @ApiQuery({
    name: 'offset',
    required: true,
    description:
      'User 정보의 페이지수를 나타냅니다. 0을 제외한 양수의 값입니다.',
  })
  @Get('/')
  getAllUserInfoUsingPagination(
    @Query(new ValidationPipe({ transform: true }))
    userSearchRequest: UserSearchRequest,
  ) {
    return this.usersService.getAllUserInfoUsingPagination(userSearchRequest);
  }
}
