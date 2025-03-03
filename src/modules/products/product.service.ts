import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateProductDto } from "./dto/createProductDto";
import { InjectModel } from "@nestjs/mongoose";
import { Product, ProductDocument } from "./schema/products.schema";
import { Model } from "mongoose";


@Injectable()
export class ProductService{
    constructor(
        @InjectModel(Product.name) private productModel : Model<ProductDocument>
    ){}

   async createProduct(data : CreateProductDto){
       
       const newProduct = await new this.productModel(data).save();
       return newProduct
    }

    async getProducts(limit ?: string){
       
        const products = await this.productModel.find().limit(limit ? +limit : 0);
        return products
    
        
    }

    async getProduct(slug : string){
        const product = await this.productModel.findOne({
            $or:[{slug} , {_id:slug}]
        });
        
        if(product === null){
             throw new NotFoundException('Product not found')

        }else{
            return product
        }
        
    }

}