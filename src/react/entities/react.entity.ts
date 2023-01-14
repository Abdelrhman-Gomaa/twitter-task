import { ObjectType, Field, Int } from '@nestjs/graphql';
import { 
  PrimaryKey, 
  AutoIncrement, 
  Column, 
  DataType, 
  ForeignKey, 
  Table, 
  Model 
} from 'sequelize-typescript';
import { Tweet } from '../../tweet/entities/tweet.entity';
import { User } from '../../user/entities/userEntity';

@Table
@ObjectType()
export class React extends Model{
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)   
  @Field(type => Int)
  id: number;

  @ForeignKey(() => User)
  @Field(type => Int)
  user_Id: number

  @ForeignKey(() => Tweet)
  @Field(type => Int)
  tweet_Id: number

}
