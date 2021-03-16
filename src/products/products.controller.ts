import { 
    Controller, 
    Post, 
    Body, 
    Put,
    Delete, 
    Param, 
    ParseIntPipe,
    HttpException,
    HttpCode,
    HttpStatus,
    Get,
} from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';

import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/createProduct.dto';

@Controller('products')
export class ProductsController {

    constructor(
        private readonly productService:ProductsService
    ){}

    @ApiBody({
        type: CreateProductDto,
        required: true,
        description: `new product data`
    })
    @Post('/')
    @HttpCode(HttpStatus.CREATED)
    async create(
        @Body() product:CreateProductDto
    ){
        return product
    }

    @ApiBody({
        type: CreateProductDto,
        required: true,
        description: `updated product data`
    })
    @Put('/:id')
    @HttpCode(HttpStatus.OK)
    async update(
        @Param('id', ParseIntPipe) id:number,
        @Body() product:CreateProductDto
    ){
        return {
            id, 
            ...product
        }
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    async findOne (
        @Param('id', ParseIntPipe) id:number
    ) {
        return {
            id,
            name: 'bla bla'
        }
    }

    @Get('/')
    @HttpCode(HttpStatus.OK)
    async findAll () {
        return [
            {
                id: 1,
                name: 'bla'
            },
            {
                id: 2,
                name: 'bla bla'
            }
        ]
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.OK)
    async delete(
        @Param('id', ParseIntPipe) id:number
    ){
        return { id }
    }
}
