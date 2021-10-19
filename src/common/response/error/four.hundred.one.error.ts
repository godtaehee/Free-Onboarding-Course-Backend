import { ApiExtraModels, ApiProperty } from '@nestjs/swagger';

@ApiExtraModels()
export class FourHundredOne {
  @ApiProperty({
    type: 'number',
    description:
      'Access-token이 없이 게시글을 생성했을때 발생될수 있는 에러입니다.',
    example: '401',
  })
  statusCode: number;

  @ApiProperty({
    type: 'string',
    title: 'Error 메시지',
    example: 'Unauthorized',
    description:
      '다양한 type형태의 에러 메시지가 올수 있습니다. 예를들면, string, array 등등이 있습니다.',
  })
  message: any;
}
