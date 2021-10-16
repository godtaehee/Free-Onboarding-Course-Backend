import { Injectable } from '@nestjs/common';
import { SignUpDto } from './dto/sign.up.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersRepository) private usersRepository: UsersRepository,
  ) {}
  signUp(signUpDto: SignUpDto) {
    return this.usersRepository.signUp(signUpDto);
  }
}
