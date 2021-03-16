import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';
import { CreateCategoryDto } from './createCategory.dto';

export class CategoryPkDto extends CreateCategoryDto  {

    @ApiProperty({
        type: Number,
        minimum: 0,
        required: false,
        description: `category primary key`,
        default: undefined
    })
    @IsNumber({
        maxDecimalPlaces: 0,
        allowInfinity: false,
        allowNaN: false,
    })
    id?:number
}