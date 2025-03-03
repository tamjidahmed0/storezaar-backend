import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User } from "../users/schemas/users.schema";
import { Model } from "mongoose";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(User.name) private userModel: Model<User>,
        private jwt: JwtService
    ) { }



    // async findOrCreateUser(req: any, res: any) { 
    //     const existingUser = await this.userModel.findOne({ email: req.user.email });
    //     console.log(existingUser)

    //     if (existingUser !== null) {
    //         const payload = {
    //             userId: existingUser._id,
    //         }

 
    //         return {
    //             ...existingUser,
    //             token: this.jwt.sign(payload, {
    //                 secret: process.env.ACCESS_TOKEN,

    //             })
    //         }

    //     } else {
    //         const newUser = await new this.userModel(req.user).save()
    //         const payload = {
    //             userId: newUser._id,
    //         }


    //         return {
    //             ...newUser,
    //             token: this.jwt.sign(payload, {
    //                 secret: process.env.ACCESS_TOKEN
    //             })
    //         }
    //     }




    // }






    async findOrCreateUser(req: any) { 
        const existingUser = await this.userModel.findOne({ email: req.user.email });
    
        if (existingUser) {
            const user = existingUser.toObject();
            const payload = { userId: user._id.toString() };
    
            return {
                ...user,  
                token: this.jwt.sign(payload, {
                    secret: process.env.ACCESS_TOKEN,
                    expiresIn: "7d",
                })
            };
        } 
    
        const newUser = await new this.userModel(req.user).save();
        const user = newUser.toObject(); 
        const payload = { userId: user._id.toString() };
    
        return {
            ...user,  
            token: this.jwt.sign(payload, {
                secret: process.env.ACCESS_TOKEN,
                expiresIn: "7d",
            })
        };
    }
    





}