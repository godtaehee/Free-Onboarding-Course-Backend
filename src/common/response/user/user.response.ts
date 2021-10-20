import { ApiExtraModels, ApiProperty, PickType } from '@nestjs/swagger';
import { Board } from '../../../boards/boards.entity';
import { User } from '../../../users/users.entity';

@ApiExtraModels()
export class UserResponse extends PickType(User, [
  'userId',
  'email',
  'password',
  'nickname',
  'boards',
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
    type: () => Board,
    description: '해당 유저가 작성한 모든 게시글을 나타냅니다.',
  })
  boards: Board[];
}
