import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import * as dotenv from 'dotenv';
dotenv.config();
import { usersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { ProductModule } from './modules/products/product.module';
import { OrderModule } from './modules/orders/Order.module';



@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI as string),
    AuthModule,
    usersModule,
    ProductModule,
    OrderModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
