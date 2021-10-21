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
    items: {
      type: 'string',
      example: 'title must be longer than or equal to 2 charaters',
    },
    description:
      'Request-Body의 각각 프로퍼티의 제약조건에 맞지 않은 값이 포함되어 있습니다.',
  })
  message: any;

  @ApiProperty({
    type: 'string',
    description: 'Error의 이름',
    example: 'Bad Request',
  })
  error: string;
}
