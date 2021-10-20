import { Injectable } from '@nestjs/common';
import { Page } from '../page';

@Injectable()
export class PaginationHelper<T> {
  getPaginationItems<T>(count: number, limit: number, items: T[]): Page<T> {
    return new Page<T>(count, limit, items);
  }
}
