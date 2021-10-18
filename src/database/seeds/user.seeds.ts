import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { User } from '../../users/users.entity';

export class CreateUser implements Seeder {
  async run(factory: Factory, connection: Connection) {
    const user = await factory(User)().createMany(10);
    await connection.getRepository(User).save(user);
  }
}
