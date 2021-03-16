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
import { CategoriesService } from './categories.service';
import { ParsePaginationPipe } from '../util/pagination.pipe'

@Controller('categories')
export class CategoriesController {

    constructor (
        private readonly categoryService:CategoriesService
    ) {}

    @Get('/:id/products/:page/:size')
    @HttpCode(HttpStatus.OK)
    async getOne (
        @Param('id', ParseIntPipe) id:number,
        @Param('page', ParsePaginationPipe) page:number,
        @Param('size', ParsePaginationPipe) size:number
    ) {
        try {
            return await this.categoryService.findOneWithProducts(id, page, size)
        } catch (error) {
            throw new HttpException(`${error.toString()}`, 
            HttpStatus.INTERNAL_SERVER_ERROR)            
        }
    }


}
