import { Module } from "@nestjs/common";
import { OrderController } from "./Order.controller";
import { OrderService } from "./Order.service";
import { MongooseModule } from "@nestjs/mongoose";
import { Order, OrderSchema } from "./schema/order.schema";

@Module({
    imports:[
        MongooseModule.forFeature([
            {name: Order.name , schema: OrderSchema}
        ])
    ],
    controllers:[OrderController],
    providers: [OrderService]
})
export class OrderModule{}