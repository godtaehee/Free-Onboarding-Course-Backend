import { PickType } from '@nestjs/swagger';
import { User } from '../../../users/users.entity';

export class NotInclueSensitiveUserInfoResponse extends PickType(User, [
  'userId',
  'nickname',
] as const) {}
