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
} from '@nestjs/swagger';
import { RequestAboutUserSuccessResponse } from '../common/response/user/request.about.user.success.response';
import { ApiCommonOkResponseForm } from '../common/decorators/api.common.Ok.response.form';
import { NotValidNumberError } from '../common/response/error/not.valid.number.error';
import { UserResponse } from '../common/response/user/user.response';
import { ApiCommonPaginationOkResponseForm } from '../common/decorators/pagination/api.common.Ok.response.form';
import { CommonResponseFormInterceptor } from '../common/interceptors/common.response.form.interceptor';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @ApiOperation({
    summary: '한명의 유저의 정보를 모두 얻어옵니다.',
    description:
      '채점자 분들께서 DB의 실제 내용을 확인하기 위해 ' +
      'DB Browser for SQLite와 같은 In-Memory DB를 가시적으로 볼수있는 프로그램도 설치하지 않아도' +
      '확인하실수 있는것에 목적을 둔 API입니다. 회원가입 혹은 기존의 유저의 정보를 해당 API를 사용하여 직접 조회해보실수 있습니다.',
  })
  @ApiCommonOkResponseForm(RequestAboutUserSuccessResponse, {
    description: 'User정보를 불러오는데 성공시 응답입니다.',
  })
  @ApiParam({
    name: 'userId',
    required: true,
    description:
      '실제 회원가입을 마친상태인 유저의 Auto-Generated된 고유 id입니다.',
  })
  @ApiBadRequestResponse({
    type: NotValidNumberError,
  })
  @UseInterceptors(CommonResponseFormInterceptor)
  @Get('/:userId')
  getSingleUserInfo(@Param('userId') userId: number) {
    return this.usersService.getSingleUserInfo(userId);
  }

  @ApiOperation({
    summary:
      '유저의 정보를 Pagination을 이용해 서비스의 모든 유저정보가 아닌 일정한 단위의 유저정보를 가져옵니다.',
    description:
      '채점자 분들께서 DB의 실제 내용을 확인하기 위해 ' +
      'DB Browser for SQLite와 같은 In-Memory DB를 가시적으로 볼수있는 프로그램도 설치하지 않아도' +
      '확인하실수 있는것에 목적을 둔 API입니다. 회원가입 혹은 기존의 유저의 정보 리스트를 해당 API를 사용하여 직접 조회해보실수 있습니다.',
  })
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
  @ApiCommonPaginationOkResponseForm(UserResponse, {
    description: 'limit개의 유저에 대한 정보입니다.',
  })
  @ApiBadRequestResponse({
    type: NotValidNumberError,
  })
  @Get('/')
  getAllUserInfoUsingPagination(
    @Query(new ValidationPipe({ transform: true }))
    userSearchRequest: UserSearchRequest,
  ) {
    return this.usersService.getAllUserInfoUsingPagination(userSearchRequest);
  }
}
