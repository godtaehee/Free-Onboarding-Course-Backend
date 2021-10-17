import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Board } from '../boards/boards.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  nickname: string;

  @OneToMany((type) => Board, (board) => board.user, { eager: false })
  boards: Board[];
}
