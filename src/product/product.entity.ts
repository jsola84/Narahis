import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { PRODUCT_CATEGORY, PRODUCT_GENDER } from "./product-category.enum";

@Entity({ name: 'products'})
export class Product {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'enum',
        enum: PRODUCT_CATEGORY,
    })
    typeProduct: PRODUCT_CATEGORY;

    @Column({ nullable: true })
    nameProduct: string; 

    @Column({
        type: 'enum',
        enum: PRODUCT_GENDER,
    })
    gender: string; 

    @Column( { nullable: true })
    color: string; 

    @Column( { nullable: true })
    material: string; 

    @Column( { nullable: true })
    cost: number;

    @Column( { nullable: true })
    price: number;
}

