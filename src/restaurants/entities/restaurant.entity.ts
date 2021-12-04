import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

//graphQL에서 사용하는 스키마를 자동으로 생성해주고 db에도 자동으로 즉시 반영해준다!
@ObjectType() //Restaurant을 위한 Object type을 만들어 준다.
@Entity() // typeorm이 db에 저장해준다
export class Restaurant {
  @PrimaryGeneratedColumn()
  @Field((type) => Number)
  id: number;

  @Field((type) => String) //@Field의 첫번째 argument로는 returnTypeFunction이 와야한다.
  @Column() //typeorm을 위한 것
  name: string;

  @Field((type) => Boolean, { nullable: true })
  @Column()
  isVegan?: boolean;

  @Field((type) => String)
  @Column()
  address: string;

  @Field((type) => String)
  @Column()
  ownerName: string;

  @Field((type) => String)
  @Column()
  catagoryName: string;
}
