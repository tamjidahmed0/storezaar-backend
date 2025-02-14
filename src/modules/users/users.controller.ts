import { Controller } from "@nestjs/common";
import { userServices } from "./users.service";

@Controller('api')
export class userControllers{
    constructor(private readonly userServices : userServices){}
}