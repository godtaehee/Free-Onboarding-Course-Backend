import { define } from 'typeorm-seeding';
import * as faker from 'faker';
import { Board } from '../../boards/boards.entity';

define(Board, () => {
  const title = faker.lorem.sentence();
  const content = faker.lorem.sentences();

  const board = new Board();

  board.title = title;
  board.content = content;
  board.user = {
    userId: faker.datatype.number({
      min: 1,
      max: 20,
    }),
  } as any;

  return board;
});
