import { ApiExtraModels, ApiProperty } from '@nestjs/swagger';

@ApiExtraModels()
export class RequestAboutUserSuccessResponse {
  @ApiProperty({
    description: 'User의 Auto-Generated된 고유 id입니다.',
    example: '1',
  })
  userId: number;
}
