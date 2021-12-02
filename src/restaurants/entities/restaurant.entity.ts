import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType() //Restaurant을 위한 Object type을 만들어 준다.
export class Restaurant {
  @Field((type) => String) //@Field의 첫번째 argument로는 returnTypeFunction이 와야한다.
  name: string;
  @Field((type) => Boolean, { nullable: true })
  isVegan?: boolean;
  @Field((type) => String)
  address: string;

  @Field((type) => String)
  ownerName: string;
}
