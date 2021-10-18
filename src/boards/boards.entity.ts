import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from '../users/users.entity';
import { ApiProperty } from '@nestjs/swagger';
import { Length } from 'class-validator';

@Entity()
export class Board {
  @ApiProperty({
    title: 'Board 한개의 id',
    description: 'Auto-Generated된 고유값입니다.',
    example: '1',
  })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    example: 'Nest.js 탐험기',
    title: '게시글의 제목입니다.',
    description: '최소 2글자에서 최대 100글자까지 가능합니다.',
    required: true,
  })
  @Length(2, 100)
  @Column()
  title: string;

  @ApiProperty({
    example:
      'Nest.js는 Angular와 Spring을 아주 잘 조합해놓은 프레임워크인것 같습니다.',
    description: '게시글의 내용부분입니다.',
    required: false,
  })
  @Column()
  content: string;

  @ApiProperty({
    example: new Date(),
    description: '게시글이 생성된 날을 나타냅니다.',
  })
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty({
    example: new Date(),
    description:
      '게시글이 업데이트 된 날을 나타냅니다. 최초 생성시 createdAt과 동일한 시간을 가집니다.',
  })
  @UpdateDateColumn()
  updatedAt: Date;

  @ApiProperty({
    examples: [null, new Date()],
    description:
      '게시글이 삭제된 날을 나타냅니다 Soft-Delete 방식을 채택했습니다. 게시글이 삭제되지 않았다면 이 값은 NULL이 됩니다.',
  })
  @DeleteDateColumn()
  deletedAt: Date | null;

  @ApiProperty({
    type: () => User,
    title: '작성자 정보',
    description: '게시글을 작성한 작성자의 정보를 나타냅니다.',
  })
  @ManyToOne((type) => User, (user) => user.boards, { eager: false })
  user: User;
}
