import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { GoogleStrategy } from "./strategies/google.strategy";
import { PassportModule } from "@nestjs/passport";
import { AuthService } from "./auth.service";
import { MongooseModule } from "@nestjs/mongoose";
import { User, UserSchema } from "../users/schemas/users.schema";
import { JwtModule } from "@nestjs/jwt";


@Module({
    imports: [
        PassportModule.register({ defaultStrategy: 'google' }),
        MongooseModule.forFeature([
            { name: User.name, schema: UserSchema }
        ]),
        JwtModule.register({
            secret: process.env.ACCESS_TOKEN,    
            signOptions:{
                expiresIn: '1d'
            }
        })

    ],
    controllers: [AuthController],
    providers: [GoogleStrategy, AuthService],

})
export class AuthModule { }