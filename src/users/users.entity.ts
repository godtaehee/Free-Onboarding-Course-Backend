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
import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';
import * as faker from 'faker';

@Entity()
export class User {
  @ApiProperty({
    example: '1',
    description: '회원가입시 Auto-Generated되는 사용자의 고유 id 입니다.',
    required: true,
  })
  @PrimaryGeneratedColumn({ name: 'id' })
  userId: number;

  @ApiProperty({
    example: faker.internet.email(),
    title: '사용자의 이메일',
    description: '5~50자 사이의 이메일이어야 합니다.',
    required: true,
  })
  @IsNotEmpty()
  @IsEmail()
  @Length(5, 50)
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
    title: '사용자의 닉네임입니다.',
    description: '최소 2자부터 최대 20자까지 설정할수 있습니다.',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  @Length(2, 20)
  @Column()
  nickname: string;

  @ApiProperty({
    example: new Date(),
    description: '유저가 회원가입한 날을 나타냅니다.',
  })
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty({
    example: new Date(),
    description:
      '유저의 정보가 업데이트된 날을 나타냅니다. 최초 생성시 createdAt과 동일한 시간을 가집니다.',
  })
  @UpdateDateColumn()
  updatedAt: Date;

  @ApiProperty({
    examples: [null, new Date()],
    description:
      '유저가 회원탈퇴한 날을 나타냅니다 Soft-Delete 방식을 채택했습니다. 회원탈퇴를 하지 않았으면 이 값은 NULL이 됩니다.',
  })
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
