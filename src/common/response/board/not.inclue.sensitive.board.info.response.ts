import { ApiExtraModels, ApiProperty, PickType } from '@nestjs/swagger';
import { Board } from '../../../boards/boards.entity';
import { NotInclueSensitiveUserInfoResponse } from '../user/not.inclue.sensitive.user.info.response';

@ApiExtraModels()
export class NotInclueSensitiveBoardInfoResponse extends PickType(Board, [
  'id',
  'title',
  'content',
  'createdAt',
  'updatedAt',
  'deletedAt',
]) {
  constructor(board: Board, user: NotInclueSensitiveUserInfoResponse) {
    super();
    this.id = board.id;
    this.title = board.title;
    this.content = board.content;
    this.createdAt = board.createdAt;
    this.updatedAt = board.updatedAt;
    this.deletedAt = board.deletedAt;
    this.user = user;
  }

  @ApiProperty({
    type: () => NotInclueSensitiveUserInfoResponse,
    description: 'test',
  })
  user: NotInclueSensitiveUserInfoResponse;
}
