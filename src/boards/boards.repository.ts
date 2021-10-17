import { EntityRepository, Repository } from 'typeorm';
import { Board } from './boards.entity';

@EntityRepository(Board)
export class BoardsRepository extends Repository<Board> {}
