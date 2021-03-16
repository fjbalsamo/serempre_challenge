import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InsertResult, Repository } from 'typeorm';
import { CategoryEntity } from './entity'

@Injectable()
export class CategoriesService {

    constructor(
        @InjectRepository(CategoryEntity)
        private readonly categoryRepo: Repository<CategoryEntity>
    ){}


    async insert(){}

    async update(){}

    /**
     * return one category and your products
     * @param {number} categoryID 
     */
    async findOneWithProducts (categoryID:number) {
        return this.categoryRepo.findOne(categoryID, {
            relations: ['products']
        })
    }

    async delete(){}
}
