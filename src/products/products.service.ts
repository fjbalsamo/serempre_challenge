import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductEntity } from './entity';
import { CreateProductDto } from './dto/createProduct.dto';
import { CategoryEntity } from '../categories/entity';
import { ProviderEntity } from '../providers/entity'

@Injectable()
export class ProductsService {

    constructor(
        @InjectRepository(ProductEntity)
        private readonly productRepo: Repository<ProductEntity>
    ) { }

    async insert(product:CreateProductDto) {
        const { category, provider, ...rest } = product;

        const eCategory:CategoryEntity = {
            description: category.description,
            id: category.id || undefined,
            name: category.name,
            picture: category.picture || null
        }

        const eProvider:ProviderEntity = {
            address: provider.address,
            city: provider.city,
            companyName: provider.companyName,
            contactName: provider.contactName,
            contactTitle: provider.contactTitle,
            country: provider.country,
            id: provider.id || undefined,
            phone: provider.phone,
            postalCode: provider.postalCode,
            region: provider.region,
            fax: provider.fax || null,
            homePage: provider.homePage || null
        }



        const newProduct = new ProductEntity()

        newProduct.category = eCategory;
        newProduct.provider = eProvider;
        newProduct.discontinued = 0;
        newProduct.name = rest.name;
        newProduct.quantityPerUnit = rest.quantityPerUnit;
        newProduct.reorderLevel = rest.reorderLevel || 0;
        newProduct.unitPrice = rest.unitPrice;
        newProduct.unitsInStock = rest.unitsInStock || 0;
        newProduct.unitsOnOrder = rest.unitsOnOrder || 0;
        
        return await this.productRepo.save([newProduct])
    }

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
