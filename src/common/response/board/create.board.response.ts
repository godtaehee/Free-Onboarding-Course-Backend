import { ApiProperty } from '@nestjs/swagger';

export class CreateBoardResponse {
  @ApiProperty({
    title: '요청 성공 여부',
    example: 'true',
  })
  success: boolean;

  @ApiProperty({
    title: '생성된 Board의 Auto-Generated된 고유 Id',
    example: '1',
  })
  boardId: number;
}
