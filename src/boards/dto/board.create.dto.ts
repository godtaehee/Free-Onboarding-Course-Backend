import { Column } from 'typeorm';
import { IsNotEmpty } from 'class-validator';

export class BoardCreateDto {
  @Column()
  @IsNotEmpty()
  title: string;

  @Column()
  content: string;
}
