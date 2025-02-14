import { Controller, Get, Req, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { GoogleAuthGuard } from "./guard/google.guard";
import { InjectModel } from "@nestjs/mongoose";
import { User } from "../users/schemas/users.schema";
import { Model } from "mongoose";
import { AuthService } from "./auth.service";



@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) { }




    @Get('google')
    @UseGuards(AuthGuard('google'))
    // async googleAuth() {
    //     return { message: 'Redirecting to Google' };
    // }

    @Get('google/callback')
    @UseGuards(AuthGuard('google'))
    googleAuthRedirect(@Req() req: any) {

        return this.authService.findOrCreateUser(req)

    }
}