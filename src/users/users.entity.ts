import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Board } from '../boards/boards.entity';
import * as bcrypt from 'bcrypt';
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import * as faker from 'faker';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    example: faker.internet.email(),
    description: '사용자의 이메일입니다.',
    required: true,
  })
  @IsNotEmpty()
  @IsEmail()
  @Column({ unique: true })
  email: string;

  @ApiProperty({
    example: faker.internet.password(),
    description: '사용자의 패스워드입니다.',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  @Column()
  password: string;

  @ApiProperty({
    example: faker.internet.userName(),
    description: '사용자의 닉네임입니다.',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  @Column()
  nickname: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date | null;

  @OneToMany((type) => Board, (board) => board.user, { eager: false })
  boards: Board[];

  @BeforeInsert()
  async setPassword(password: string) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(password || this.password, salt);
  }
}
