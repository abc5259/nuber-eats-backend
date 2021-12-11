import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql';
import {
  CreateAccountInput,
  CreateAccountOutput,
} from './dtos/create-account.dto';
import { LoginInput, LoginOutput } from './dtos/login.dto';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@Resolver((of) => User)
export class UsesrResolver {
  constructor(private readonly usesrService: UsersService) {}

  @Query((returns) => Boolean)
  hi(): boolean {
    return true;
  }

  @Mutation((returns) => CreateAccountOutput)
  async createAccount(
    @Args('input') createAccountInput: CreateAccountInput,
  ): Promise<CreateAccountOutput> {
    try {
      return await this.usesrService.createAccount(createAccountInput);
    } catch (error) {
      return {
        ok: false,
        error,
      };
    }
  }

  @Mutation((returns) => LoginOutput)
  async login(@Args('input') loginInput: LoginInput) {
    try {
      return await this.usesrService.login(loginInput);
    } catch (error) {
      return { ok: false, error };
    }
  }

  @Query((returns) => User)
  me(@Context() context) {
    if (!context.user) {
      return;
    } else {
      console.log(context.user);
      return context.user;
    }
  }
}
