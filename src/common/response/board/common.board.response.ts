import { ApiProperty } from '@nestjs/swagger';

export class CommonBoardResponse {
  @ApiProperty({
    title: '해당 요청처리가 완료된 Board의 Auto-Generated된 고유 Id',
    example: '1',
  })
  boardId: number;
}
