import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { Board } from '../../boards/boards.entity';

export class CreateBoard implements Seeder {
  async run(factory: Factory, connection: Connection) {
    const board = await factory(Board)().createMany(100);
    await connection.getRepository(Board).save(board);
  }
}
