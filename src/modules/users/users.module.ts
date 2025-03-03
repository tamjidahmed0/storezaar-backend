import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { User, UserSchema } from "./schemas/users.schema";
import { userServices } from "./users.service";
import { userControllers } from "./users.controller";

@Module({
    imports : [
        MongooseModule.forFeature([
            {name: User.name , schema: UserSchema }
        ])
    ] ,
    controllers: [userControllers],
    providers: [userServices]
})
export class usersModule {}