import { ApiExtraModels, ApiProperty } from '@nestjs/swagger';
import * as faker from 'faker';

@ApiExtraModels()
export class SignInSuccessResponse {
  @ApiProperty({
    description: '로그인 후 다양한 API에 접근할 수 있는 Access-Token입니다.',
    example: `${faker.datatype.hexaDecimal(
      256 / 4,
    )}.${faker.datatype.hexaDecimal(256 / 4)}.${faker.datatype.hexaDecimal(
      256 / 4,
    )}`,
  })
  accessToken: string;
}
