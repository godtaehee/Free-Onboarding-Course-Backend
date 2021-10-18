import { PickType } from '@nestjs/swagger';
import { User } from '../../users/users.entity';

export class SignInDto extends PickType(User, ['email', 'password'] as const) {}
