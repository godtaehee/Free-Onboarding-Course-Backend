import { IsNotEmpty, IsNumber, IsPositive } from 'class-validator';
import { Type } from 'class-transformer';

export class PaginationDto {
  @IsNotEmpty()
  @IsPositive()
  @Type(() => Number)
  limit: number;

  @IsNotEmpty()
  @IsPositive()
  @Type(() => Number)
  offset: number;
}
