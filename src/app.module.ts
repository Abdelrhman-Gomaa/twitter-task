import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './user/user.module';
import { TweetModule } from './tweet/tweet.module';
import { UserFollwoersModule } from './user.follwoers/user.follwoers.module';
import { FollowerModule } from './follower/follower.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    DatabaseModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      // code first with auto create schema in path 'src/schema.gql'
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    UserModule,
    TweetModule,
    UserFollwoersModule,
    FollowerModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
