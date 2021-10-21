import { ApiExtraModels, ApiProperty } from '@nestjs/swagger';

@ApiExtraModels()
export class FourHundredError {
  @ApiProperty({
    type: 'number',
    description: 'HTTP Error Code입니다.',
    example: '400',
  })
  statusCode: number;

  @ApiProperty({
    type: 'array',
    title: 'Error 메시지',
    example: [
      'title must be longer than or equal to 2 charaters',
      'email must be an email',
      'password must be longer than or equal to 5 characters',
      'nickname must be shorter than or equal to 20 characters',
    ],
    description:
      'Request-Body의 각각 프로퍼티의 제약조건에 맞지 않은 값이 포함되어 있습니다. ' +
      '해당 예시에 나와 있는 오류중에 적어도 한 개의 조건에 맞지 않아 요청이 실패했습니다.',
  })
  message: any;

  @ApiProperty({
    type: 'string',
    description: 'Error의 이름',
    example: 'Bad Request',
  })
  error: string;
}
