import { ApiExtraModels, ApiProperty } from '@nestjs/swagger';

@ApiExtraModels()
export class RegisterSuccessResponse {
  @ApiProperty({
    description: '회원가입이 성공한후 Auto-Generated된 유저의 고유 id값입니다.',
    example: '1',
  })
  userId: number;
}
