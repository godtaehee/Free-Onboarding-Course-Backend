import { ApiExtraModels, ApiProperty, PickType } from '@nestjs/swagger';
import { Board } from '../../../boards/boards.entity';
import { NotInclueSensitiveUserInfoResponse } from '../user/not.inclue.sensitive.user.info.response';

@ApiExtraModels()
export class NotIncludeSensitiveInfoBoardResponse extends PickType(Board, [
  'boardId',
  'title',
  'content',
  'createdAt',
  'updatedAt',
  'deletedAt',
]) {
  constructor(board: Board, user: NotInclueSensitiveUserInfoResponse) {
    super();
    this.boardId = board.boardId;
    this.title = board.title;
    this.content = board.content;
    this.createdAt = board.createdAt;
    this.updatedAt = board.updatedAt;
    this.deletedAt = board.deletedAt;
    this.user = user;
  }

  @ApiProperty({
    type: () => NotInclueSensitiveUserInfoResponse,
    description: '해당 게시글을 작성한 유저의 정보입니다.',
  })
  user: NotInclueSensitiveUserInfoResponse;
}
