import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { UserSchema, User } from "./schemas/users.schema";
import { Model } from "mongoose";

@Injectable()
export class userServices{
    constructor (
        @InjectModel(User.name) private userModel : Model<User>
     ){}


 async getUsers(id : string){
    console.log(id, 'params');
    
        const user = await this.userModel.findById(id)
        console.log(user, 'user');

        if(user !== null){
            return user

        }else{
            return {
                msg: 'User not found'
            }
        }
     


  }



}