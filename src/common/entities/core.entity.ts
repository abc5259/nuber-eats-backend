import {
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export class CoreEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn() // entity를 만들었을때 자동으로 설정해 주는 special column
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
