import { PRODUCT_CATEGORY } from '../product-category.enum'; // Ajusta la importación según tu estructura de carpetas
import { DeepPartial } from 'typeorm';
import { Product } from '../product.entity';

export class CreateProductDto {
    typeProduct: string;
    nameProduct?: string;
    gender: string;
    color: string;
    material?: string;
    cost: number;
    price: number;
}
















 
 
