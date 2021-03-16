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
        description: `create new category`
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
        description: `category to update`
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

    @Get('/:id')
    async getOne (
        @Param('id', ParseIntPipe) id:number
    ) {
        return {
            id
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
