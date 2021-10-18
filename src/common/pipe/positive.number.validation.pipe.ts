import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from '@nestjs/common';

export class PositiveNumberValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata): any {
    if (value > 0) {
      return value;
    } else throw new BadRequestException('잘못된 요청입니다.');
  }
}
