import { ApiExtraModels, PickType } from '@nestjs/swagger';
import { Board } from '../../../boards/boards.entity';

@ApiExtraModels()
export class NotIncludeUserInfoResponse extends PickType(Board, [
  'boardId',
  'title',
  'content',
  'createdAt',
  'updatedAt',
  'deletedAt',
]) {}
