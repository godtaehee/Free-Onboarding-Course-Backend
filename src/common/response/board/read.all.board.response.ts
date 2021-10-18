import { Board } from '../../../boards/boards.entity';
import { ApiProperty } from '@nestjs/swagger';

export class ReadAllBoardResponse {
  @ApiProperty({
    title: '요청 성공 여부',
    example: 'true',
  })
  success: boolean;

  @ApiProperty({
    title: 'data의 Board 개수',
    example: '30',
  })
  count: number;

  @ApiProperty({
    title: 'Board Data',
    isArray: true,
    type: Board,
  })
  data: Board[];
}
