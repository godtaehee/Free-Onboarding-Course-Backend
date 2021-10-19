export abstract class PageRequest {
  offset: number | 1;
  limit: number | 10;

  getOffset(): number {
    return (this.offset - 1) * this.limit;
  }

  getLimit(): number {
    return this.limit;
  }
}
