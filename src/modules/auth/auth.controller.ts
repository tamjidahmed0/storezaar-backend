import { Controller, Get, Req, Res, UseGuards } from "@nestjs/common";
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
    async googleAuth() {
        return { message: 'Redirecting to Google' };
    }

    @Get('google/callback')
    @UseGuards(AuthGuard('google'))
   async googleAuthRedirect(@Req() req: any , @Res() res: any) {

        //  this.authService.findOrCreateUser(req, res)
        const user = await this.authService.findOrCreateUser(req);

        console.log(user, 'user');

        return res.redirect(`http://localhost:3000/signup?token=${user.token}&&userId=${user._id.toString()}`)

    }
}