import {
  Controller,
  Get,
  Param,
  Query,
  UseInterceptors,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UserSearchRequest } from './dto/user.search.request';
import {
  ApiBadRequestResponse,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { NotValidNumberError } from '../common/response/error/not.valid.number.error';
import { UserResponse } from '../common/response/user/user.response';
import { ApiCommonPaginationOkResponseForm } from '../common/decorators/pagination/api.common.Ok.response.form';
import { CommonResponseFormInterceptor } from '../common/interceptors/common.response.form.interceptor';
import { ApiCommonOkResponseForm } from '../common/decorators/api.common.Ok.response.form';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @ApiTags('In-Memory Database 확인용')
  @ApiOperation({
    summary: '한 명의 유저의 정보를 모두 얻어옵니다.',
    description:
      '채점자분들께서 DB의 실제 내용을 확인하기 위해 DB Browser for SQLite와 같은' +
      ' In-Memory DB를 가시적으로 볼 수 있는 프로그램도 설치하지 않아도 확인하실 수 있는 것에 목적을 둔 API입니다.' +
      ' 회원가입 혹은 기존의 유저의 정보를 해당 API를 사용하여 직접 조회해보실 수 있습니다.',
  })
  @ApiCommonOkResponseForm(UserResponse, {
    description: 'User 정보를 불러오는데 성공 시 응답입니다.',
  })
  @ApiParam({
    name: 'userId',
    required: true,
    description:
      '실제 회원가입을 마친 상태인 유저의 Auto-Generated 된 고유 id입니다.',
  })
  @ApiBadRequestResponse({
    type: NotValidNumberError,
    description: '제약조건에 맞지 않은 값이 포함되어 있습니다.',
  })
  @UseInterceptors(CommonResponseFormInterceptor)
  @Get('/:userId')
  getSingleUserInfo(@Param('userId') userId: number) {
    return this.usersService.getSingleUserInfo(userId);
  }

  @ApiTags('In-Memory Database 확인용')
  @ApiOperation({
    summary:
      '유저의 정보를 Pagination을 이용해 서비스의 모든 유저정보가 아닌 일정한 단위의 유저정보를 가져옵니다. (Pagination)',
    description:
      '채점자분들께서 DB의 실제 내용을 확인하기 위해 DB Browser for SQLite와 같은' +
      ' In-Memory DB를 가시적으로 볼 수 있는 프로그램도 설치하지 않아도 확인하실 수 있는 것에 목적을 둔 API입니다.' +
      ' 회원가입 혹은 기존의 유저의 정보를 해당 API를 사용하여 직접 조회해보실 수 있습니다.',
  })
  @ApiQuery({
    name: 'limit',
    required: true,
    description:
      '최대 몇 개의 User 정보를 가져올 것인지에 대한 값입니다.' +
      '최대 50개의 유저정보를 가져올 수 있습니다.',
  })
  @ApiQuery({
    name: 'offset',
    required: true,
    description:
      'User 정보의 페이지 수를 나타냅니다. 0을 제외한 양수의 값입니다. ',
  })
  @ApiCommonPaginationOkResponseForm(UserResponse, {
    description:
      'limit 개의 유저에 대한 정보입니다. ' +
      `아직 글을 작성하지 않은 작성자라면 boards 값은 빈 배열이 됩니다.`,
  })
  @ApiBadRequestResponse({
    type: NotValidNumberError,
    description: '해당 페이지에 해당하는 User 정보가 없습니다.',
  })
  @Get('/')
  getAllUserInfoUsingPagination(
    @Query(new ValidationPipe({ transform: true }))
    userSearchRequest: UserSearchRequest,
  ) {
    return this.usersService.getAllUserInfoUsingPagination(userSearchRequest);
  }
}
