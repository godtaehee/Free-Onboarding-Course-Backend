import { PickType } from '@nestjs/swagger';
import { User } from '../../users/users.entity';

export class SignUpDto extends PickType(User, [
  'email',
  'nickname',
  'password',
] as const) {}
