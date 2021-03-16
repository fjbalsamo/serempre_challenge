import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmptyString } from '../../customValidators/isNotEmptyString';

export class CreateCategoryDto {
    
    @ApiProperty({
        type: String,
        required: true,
        example: `Category name`,
        uniqueItems: false
    })
    @IsNotEmptyString({
        message: `category name is required`
    })    
    name:string

    @ApiProperty({
        type: String,
        required: true,
        example: `Category description`,
        uniqueItems: false
    })
    @IsNotEmptyString({
        message: `category description is required`
    })
    description:string

    @ApiProperty({
        type: String,
        description: `base64 image`,
        required: false,
        default: null
    })
    picture?:string

    

}