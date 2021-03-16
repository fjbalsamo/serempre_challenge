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
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/createCategory.dto';

@Controller('categories')
export class CategoriesController {

    constructor (
        private readonly categoryService:CategoriesService
    ) {}

    @Get('/:id/products')
    @HttpCode(HttpStatus.OK)
    async getOne (
        @Param('id', ParseIntPipe) id:number
    ) {
        try {
            return await this.categoryService.findOneWithProducts(id)
        } catch (error) {
            throw new HttpException(`${error.toString()}`, 
            HttpStatus.INTERNAL_SERVER_ERROR)            
        }
    }


}
