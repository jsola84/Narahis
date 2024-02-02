import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductsService {

    constructor(
        @InjectRepository(Product) private productsRepository: Repository<Product>
    ) {}
    
   async createProduct(id: number, product: CreateProductDto) {
        const userFound = await this.productsRepository.findOne({
            where: {
                id,
            },
        });
        if (!userFound) {
            return new HttpException('Id no encontrado', HttpStatus.NOT_FOUND)
        }
        
        const newProduct = this.productsRepository.create(product);

        const savedProfile = await this.productsRepository.save(newProduct);
        userFound.product = savedProfile;
    
    }
    
}
