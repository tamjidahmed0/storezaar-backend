import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { User, UserSchema } from "./schemas/users.schema";
import { userServices } from "./users.service";

@Module({
    imports : [
        MongooseModule.forFeature([
            {name: User.name , schema: UserSchema }
        ])
    ] ,
    controllers: [],
    providers: [userServices]
})
export class usersModule {}