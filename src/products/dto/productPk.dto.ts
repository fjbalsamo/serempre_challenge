import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';
import { CreateProductDto } from './createProduct.dto'

export class ProductPkDto extends CreateProductDto  {

    @ApiProperty({
        type: Number,
        minimum: 0,
        required: false,
        description: `product primary key`,
        default: undefined
    })
    @IsNumber({
        maxDecimalPlaces: 0,
        allowInfinity: false,
        allowNaN: false,
    })
    id?:number
}