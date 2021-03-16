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
import { ParsePaginationPipe } from '../util/pagination.pipe'

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
        try {
            return await this.productService.insert(product)
        } catch (error) {
            throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }   

    
    @Get('/:page/:size')
    @HttpCode(HttpStatus.OK)
    async findAll (
        @Param('page', ParsePaginationPipe) page:number,
        @Param('size', ParsePaginationPipe) size:number
    ) {
        try {
            return await this.productService.getAll(page, size)
        } catch (error) {
            throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    @Get('/search/:productName/:categoryName/:page/:size')
    @HttpCode(HttpStatus.OK)
    async search (
        @Param('page', ParsePaginationPipe) page:number,
        @Param('size', ParsePaginationPipe) size:number,
        @Param('productName') productName:string,
        @Param('categoryName') categoryName:string,
    ) {
        try {
            return await this.productService.filter(productName, categoryName, page, size)
        } catch (error) {
            throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)            
        }
    }
  
}
