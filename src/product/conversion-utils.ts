import { PRODUCT_CATEGORY } from './product-category.enum';
import { CreateProductDto } from './dto/create-product.dto'; // Ajusta la importación según tu estructura de carpetas
import { DeepPartial } from 'typeorm';
import { Product } from './product.entity';

export function convertToDeepPartial(createProductDto: CreateProductDto): DeepPartial<Product> {
    return {
        typeProduct: createProductDto.typeProduct as PRODUCT_CATEGORY,
        nameProduct: createProductDto.nameProduct,
        gender: createProductDto.gender,
        color: createProductDto.color,
        material: createProductDto.material,
        cost: createProductDto.cost,
        price: createProductDto.price,
    };
}
 
 
 
 