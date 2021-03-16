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

    
    @ApiBody({
        type: CreateCategoryDto,
        required: true,
        description: `new category data`
    })
    @Post('/')
    @HttpCode(HttpStatus.CREATED)
    async create(
        @Body() category:CreateCategoryDto
    ){
        return category

    }

    @ApiBody({
        type: CreateCategoryDto,
        required: true,
        description: `updated category data`
    })
    @Put('/:id')
    @HttpCode(HttpStatus.OK)
    async update (
        @Param('id', ParseIntPipe) id:number,
        @Body() category: CreateCategoryDto
    ) {
        return {
            id,
            ...category
        }
    }

    @Get('/:id/products')
    @HttpCode(HttpStatus.OK)
    async getOne (
        @Param('id', ParseIntPipe) id:number
    ) {
        try {
            return await this.categoryService.findOne(id)
        } catch (error) {
            throw new HttpException(`${error.toString()}`, 
            HttpStatus.INTERNAL_SERVER_ERROR)            
        }
    }

    @Get('/')
    async getAll () {
        return []
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.OK)
    async delete(
        @Param('id', ParseIntPipe) id:number
    ){
        return id
    }


}
