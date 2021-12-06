import { Resolver, Query } from '@nestjs/graphql';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@Resolver((of) => User)
export class UsesrResolver {
  constructor(private readonly usesrService: UsersService) {}

  @Query((returns) => Boolean)
  hi(): boolean {
    return true;
  }
}
