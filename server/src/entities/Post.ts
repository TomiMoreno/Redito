import { ObjectType, Field, Int } from "type-graphql";
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  BaseEntity,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { User } from "./User";
import { Vote } from "./Vote";

@ObjectType()
@Entity()
export class Post extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column()
  title!: string;

  @Field()
  @Column()
  creatorId: number;

  @Field()
  @Column()
  body: string;

  @Field()
  @Column({ type: "int", default: 0 })
  points: number;

  @Field()
  @ManyToOne(() => User, (user) => user.posts)
  creator: User;
  @OneToMany(() => Vote, (vote) => vote.post)
  votes: Vote[];

  @Field()
  voteStatus: number;
  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;
}
