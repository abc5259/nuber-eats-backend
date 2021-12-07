import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAccountInput } from './dtos/create-account.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly users: Repository<User>,
  ) {}

  async createAccount({
    email,
    password,
    role,
  }: CreateAccountInput): Promise<{ ok: boolean; error?: string }> {
    try {
      // check new user
      const exists = await this.users.findOne({ email });
      if (exists) {
        //return error Message
        return { ok: false, error: 'There is a user with that email already' };
      }
      return { ok: true };
      // Create user and Save
      await this.users.save(this.users.create({ email, password, role }));
    } catch (error) {
      //return error Message
      return { ok: false, error: "couldn't create account" };
    }
  }
}
