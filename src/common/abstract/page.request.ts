import { IsNotEmpty, IsPositive } from 'class-validator';
import { Type } from 'class-transformer';

export abstract class PageRequest {
  @IsNotEmpty()
  @IsPositive()
  @Type(() => Number)
  offset: number | 1;

  @IsNotEmpty()
  @IsPositive()
  @Type(() => Number)
  limit: number | 10;

  getOffset(): number {
    return (this.offset - 1) * this.limit;
  }

  getLimit(): number {
    return this.limit;
  }
}
