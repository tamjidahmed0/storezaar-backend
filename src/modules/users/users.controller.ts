import { Controller, Get, Param } from "@nestjs/common";
import { userServices } from "./users.service";

@Controller('user')
export class userControllers{
    constructor(private readonly userServices : userServices){}


    @Get('getUser/:id')
    async getUsers(@Param('id') id:string){
        return this.userServices.getUsers( id)
    }


}