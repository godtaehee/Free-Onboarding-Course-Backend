import { Column } from 'typeorm';
import { IsNotEmpty } from 'class-validator';

export class BoardUpdateDto {
  @Column()
  @IsNotEmpty()
  title: string;

  @Column()
  content: string;
}
