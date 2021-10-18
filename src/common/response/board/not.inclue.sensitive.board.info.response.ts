import { ApiProperty, PickType } from '@nestjs/swagger';
import { Board } from '../../../boards/boards.entity';
import { NotInclueSensitiveUserInfoResponse } from '../user/not.inclue.sensitive.user.info.response';

export class NotInclueSensitiveBoardInfoResponse extends PickType(Board, [
  'id',
  'title',
  'content',
  'createdAt',
  'updatedAt',
  'deletedAt',
]) {
  @ApiProperty({
    type: () => NotInclueSensitiveUserInfoResponse,
    description: 'test',
  })
  user: NotInclueSensitiveUserInfoResponse;
}
