import { ApiExtraModels, ApiProperty, PickType } from '@nestjs/swagger';
import { FourHundredError } from './four.hundred.error';

@ApiExtraModels()
export class NotValidNumberError extends PickType(FourHundredError, [
  'statusCode',
  'error',
] as const) {
  @ApiProperty({
    type: 'string',
    title: 'Error 메시지',
    example: '잘못된 요청입니다.',
    description:
      'Request-Body의 각각 프로퍼티의 제약조건에 맞지 않은 값이 포함되어 있습니다.',
  })
  message: any;
}
