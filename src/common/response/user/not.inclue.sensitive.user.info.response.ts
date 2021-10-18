import { PickType } from '@nestjs/swagger';
import { User } from '../../../users/users.entity';

export class NotInclueSensitiveInfoResponse extends PickType(User, [
  'id',
  'nickname',
] as const) {}
