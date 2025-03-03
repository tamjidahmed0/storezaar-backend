import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post } from "@nestjs/common";
import { OrderService } from "./Order.service";
import { CreateOrderDto } from "./dto/CreateOrderDto";

@Controller('order')
export class OrderController {
    constructor (private readonly OrderService : OrderService){}

    @Post('create')
    @HttpCode(HttpStatus.CREATED)  
    CreateOrder(@Body() data: CreateOrderDto){
        return this.OrderService.CreateOrder(data)
    }

    @Get('get/:id')
    @HttpCode(HttpStatus.CREATED)
    GetOrder(@Param('id')  userId : string  ) {
       return this.OrderService.GetOrder(userId)
    }
}