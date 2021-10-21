import {
  ApiExtraModels,
  ApiProperty,
  getSchemaPath,
  PickType,
} from '@nestjs/swagger';
import { Board } from '../../../boards/boards.entity';
import { User } from '../../../users/users.entity';
import { NotIncludeUserInfoResponse } from '../board/not.include.user.info.response';

@ApiExtraModels()
export class UserResponse extends PickType(User, [
  'userId',
  'email',
  'password',
  'nickname',
  'createdAt',
  'updatedAt',
  'deletedAt',
]) {
  constructor(user: User, boards?: Board[]) {
    super();
    this.userId = user.userId;
    this.email = user.email;
    this.password = user.password;
    this.nickname = user.nickname;
    this.boards = boards;
    this.createdAt = user.createdAt;
    this.updatedAt = user.updatedAt;
    this.deletedAt = user.deletedAt;
  }

  @ApiProperty({
    type: 'array',
    items: {
      $ref: getSchemaPath(NotIncludeUserInfoResponse),
    },
    description:
      '해당 유저가 작성한 모든 게시글을 나타냅니다. ' +
      'User의 정보에 들어가는 Board의 정보이므로 기존의 Board에 있던 User의 정보는 들어가지않습니다',
  })
  boards: NotIncludeUserInfoResponse[];
}
