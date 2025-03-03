import { Controller, Post, Body, Get, Query, Param, HttpCode, HttpStatus } from "@nestjs/common";
import { ProductService } from "./product.service";
import { CreateProductDto } from "./dto/createProductDto";

@Controller('products')
export class ProductController {

    constructor(private readonly ProductService: ProductService) { }


    @Post('create')
    @HttpCode(HttpStatus.CREATED)
    createProduct(@Body() data: CreateProductDto) {
        return this.ProductService.createProduct(data);
    }

    @Get('getAll')
    @HttpCode(HttpStatus.CREATED)
    getProducts(@Query() query: { limit?: string }) {
        return this.ProductService.getProducts(query.limit);
    }

    @Get('getOne/:slug')
    @HttpCode(HttpStatus.CREATED)
    getProduct(@Param() param: { slug: string }) {

        return this.ProductService.getProduct(param.slug);
    }

}