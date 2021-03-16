import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { ProviderEntity } from './entity';
import { CreateProviderDto } from './dto/createProvider.dto';

@Injectable()
export class ProvidersService {

    constructor(
        @InjectRepository(ProviderEntity)
        private readonly providerRepo:Repository<ProviderEntity>
    ){}

    async insert(provider:CreateProviderDto){}

    async findOne(providerID:number):Promise<ProviderEntity> {
        return await this.providerRepo.findOne(providerID);
    }

    async findOneWithProducts(providerID:number):Promise<ProviderEntity> {
        return await this.providerRepo.findOne(providerID, {
            relations: ['products', 'products.category']
        });
    }

    async delete(providerID:number):Promise<DeleteResult> {
        return this.providerRepo.delete({id: providerID})
    }



}
