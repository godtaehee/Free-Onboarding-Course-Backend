import { PickType } from '@nestjs/swagger';
import { Board } from '../boards.entity';

export class BoardCreateDto extends PickType(Board, [
  'title',
  'content',
] as const) {}
