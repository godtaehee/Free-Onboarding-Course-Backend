import { PickType } from '@nestjs/swagger';
import { Board } from '../boards.entity';

export class BoardUpdateDto extends PickType(Board, [
  'title',
  'content',
] as const) {}
