import { IsNotEmpty, IsPositive } from 'class-validator';
import { Type } from 'class-transformer';
import { PageRequest } from '../../common/abstract/page.request';

export class BoardSearchRequest extends PageRequest {
  @IsNotEmpty()
  @IsPositive()
  @Type(() => Number)
  limit: number;

  @IsNotEmpty()
  @IsPositive()
  @Type(() => Number)
  offset: number;
}
