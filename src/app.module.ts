import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from "dotenv";
dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      autoLoadEntities: true,
      type: 'mysql',
      host: process.env.DBHOST,
      username: process.env.DBUSER,
      password: process.env.DBPASSWORD,
      database: process.env.DATABASE,
      synchronize: true,  // Setting synchronize: true shouldn't be used in production - otherwise you can lose production data.
    }),
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
