import { Module } from "@nestjs/common";
import { ProductService } from "./product.service";
import { ProductController } from "./product.controller";
import { MongooseModule } from '@nestjs/mongoose';
import { ProductSchema, Product } from "./schema/products.schema";

@Module({
    imports:[
        MongooseModule.forFeature([
            {name: Product.name, schema:ProductSchema}
        ])
    ],
    controllers:[ProductController],
    providers:[ProductService],
})
export class ProductModule{}