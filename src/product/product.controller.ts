import { Controller, Get, ParseIntPipe, Param, Body, Post } from '@nestjs/common';
import { ProductsService } from './product.service';
import { Product } from './product.entity';
import { CreateProductDto } from './dto/create-product.dto';


@Controller('product')
export class ProductController {
    constructor(private productService: ProductsService) { }

    @Get()
    getProducts(): Promise<Product[]> {
        return this.productService.getProducts();
    }

    @Get()
    getProduct(@Param('id', ParseIntPipe) id: number) {
        return this.productService.getProduct();
    } 

    @Post()
    createProduct(@Body() newProduct: CreateProductDto) {
        return this.productService.createProduct();
    }
}
