import { ApiExtraModels, ApiProperty, PickType } from '@nestjs/swagger';
import { FourHundredOneError } from './four.hundred.one.error';

@ApiExtraModels()
export class SignInFailError extends PickType(FourHundredOneError, [
  'statusCode',
] as const) {
  @ApiProperty({
    type: 'string',
    title: 'Error 메시지',
    example: 'login failed',
    description: '로그인이 실패했습니다. 아이디나 비밀번호를 확인해주세요.',
  })
  message: any;

  @ApiProperty({
    type: 'string',
    title: 'Error 메시지',
    example: 'Unauthorized',
    description: 'Error의 이름입니다.',
  })
  error: string;
}
