import { ApiProperty } from '@nestjs/swagger';

export class RegisterSuccessResponse {
  @ApiProperty({
    title: '요청 성공 여부',
    example: 'true',
  })
  success: boolean;

  @ApiProperty({
    description: '회원가입이 성공한후 Auto-Generated된 유저의 고유 id값입니다.',
    example: '1',
  })
  userId: number;
}
