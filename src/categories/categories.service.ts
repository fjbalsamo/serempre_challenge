import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoryEntity } from './entity'

@Injectable()
export class CategoriesService {

    constructor(
        @InjectRepository(CategoryEntity)
        private readonly categoryRepo: Repository<CategoryEntity>
    ){}


    /**
     * return one category and your products
     * @param {number} categoryID 
     * @param {number} page
     * @param {number} size
     */
    async findOneWithProducts (categoryID:number, page:number, size:number):Promise<{
        count:number,
        page:number,
        size:number,
        category:CategoryEntity
    }>{
        
        const category = await this.categoryRepo.findOne(categoryID, {
            relations: ['products']
        })

        const count = category.products.length;

        const products = category.products;

        const end = size < products.length ? size : products.length

        const slice = products.slice(page-1, end)

        category.products = slice

        return {
            count,
            page,
            size,
            category
        }
    }
}
