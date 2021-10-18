import { define } from 'typeorm-seeding';
import { User } from '../../users/users.entity';
import * as faker from 'faker';

define(User, () => {
  const email = faker.internet.email();
  const nickname = faker.internet.userName();

  const user = new User();
  user.email = email;
  user.password = nickname;
  user.nickname = nickname;
  return user;
});
