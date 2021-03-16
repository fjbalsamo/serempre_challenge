import { IsNumber, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmptyString } from '../../customValidators/isNotEmptyString';
import { CategoryPkDto } from '../../categories/dto/categoryPk.dto';
import { ProviderPkDto } from '../../providers/dto/providerPk.dto';


export class CreateProductDto {

    @ApiProperty({
        type: String,
        description: `product name`,
        example: 'new product'
    })
    @IsNotEmptyString({
        message: `name product is required`
    })
    name:string;
    
    @ApiProperty({
        type: String,
        description: `Qty per unit`,
        example: `10Kg bags`,
        minimum: 1
    })
    @IsNotEmptyString({
        message: `qty per unit is required`
    })
    quantityPerUnit:string;
    
    @ApiProperty({
        type: Number,
        minimum: 0, 
        description: `Price per unit`
    })
    @IsNumber()
    @Min(0, {
        message: `unit price must be great than or equal to 0`
    })
    unitPrice:number;

    @ApiProperty({
        type: Number,
        required: false,
        description: `units in stock`,
        default: 0
    })
    unitsInStock?:number;

    @ApiProperty({
        type: Number,
        required: false,
        default: 0,
        description: `units in orders`
    })
    unitsOnOrder?:number;

    @ApiProperty({
        type: Number,
        required: false,
        default: 0,
        description: `reorder level`
    })
    reorderLevel?:number;

    @ApiProperty({
        type: String,
        required: false,
        default: '0',
        description: `product discontinued`
    })
    discontinued?:string;

    @ApiProperty({
        type: CategoryPkDto,
        required: true,
        description: `new category object or exsited category object`
    })
    category:CategoryPkDto

    @ApiProperty({
        type: ProviderPkDto,
        required: true,
        description: `new provider object or exsited provider object`
    })
    provider:ProviderPkDto

}