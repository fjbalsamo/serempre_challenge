import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductEntity } from './entity'

@Injectable()
export class ProductsService {

    constructor(
        @InjectRepository(ProductEntity)
        private readonly productRepo: Repository<ProductEntity>
    ) { }

    async insert() { }

    async update() { }

    /**
     * find one provider
     * @param {number} id 
     * @returns
     */
    async findOne(id: number): Promise<ProductEntity> {
        return await this.productRepo.findOne(id)
    }    

    /**
     * get all products with your category
     * @param {number} page skip register
     * @param {number} size limit to take
     */
    async getAll(page: number, size: number): Promise<{
        count: number,
        page: number,
        size: number,
        products: ProductEntity[]
    }> {

        const count = await this.productRepo.count();

        const products = await this.productRepo.find({
            relations: ['category'],
            skip: page,
            take: size
        })

        return {
            count,
            page,
            size,
            products
        }
    }

    /**
     * find all products 
     * @param {string} productName 
     * @param {string} categoryName 
     * @param {number} page 
     * @param {number} size 
     */
    async filter(
        productName: string,
        categoryName: string,
        page: number,
        size: number): Promise<{
            count: number,
            page: number,
            size: number,
            products: ProductEntity[]
        }> {
        const count = await this.productRepo.count()
        
        const where = `product_name LIKE '%${productName}%' OR category_name 
        LIKE '%${categoryName}%'`

        const products = await this.productRepo.find({
            relations: ['category'],
            where,
            skip: page,
            take: size
        })

        return {
            count,
            page,
            size,
            products
        }
    }

    async delete() { }
}
