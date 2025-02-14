import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import * as dotenv from 'dotenv';
dotenv.config();
import { usersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';



@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI as string),
    AuthModule,
    usersModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
