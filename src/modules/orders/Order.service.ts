import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Order, OrderDocument } from "./schema/order.schema";
import { Model } from "mongoose";
import { CreateOrderDto } from "./dto/CreateOrderDto";

@Injectable()
export class OrderService {
  constructor(
    @InjectModel(Order.name) private OrderModel: Model<OrderDocument>
  ) { }


  async CreateOrder(data: CreateOrderDto) {

    const newOrder = await new this.OrderModel(data).save()
    return newOrder

  }


  async GetOrder(userId: string) {

    const result = await this.OrderModel.find({userId}).populate('userId').populate('productId')

    return result



  }





}