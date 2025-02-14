import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { UserSchema, User } from "./schemas/users.schema";
import { Model } from "mongoose";

@Injectable()
export class userServices{
    constructor (
        @InjectModel(User.name) private userModel : Model<User>
     ){}


     findOrCreateUser() : any{
         
     }






}