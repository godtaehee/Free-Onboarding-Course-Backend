import { ApiProperty } from '@nestjs/swagger';
import * as faker from 'faker';

export class SignInSuccessResponse {
  @ApiProperty({
    title: '요청 성공 여부',
    example: 'true',
  })
  success: boolean;

  @ApiProperty({
    description: '로그인 후 다양한 API에 접근할수 있는 AccessToken입니다.',
    example: `${faker.datatype.hexaDecimal(
      256 / 4,
    )}.${faker.datatype.hexaDecimal(256 / 4)}.${faker.datatype.hexaDecimal(
      256 / 4,
    )}`,
  })
  accessToken: string;
}
