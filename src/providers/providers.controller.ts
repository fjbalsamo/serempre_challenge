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

import { ProvidersService } from './providers.service';
import { CreateProviderDto } from './dto/createProvider.dto';

@Controller('providers')
export class ProvidersController {

    constructor (
        private readonly providerService: ProvidersService
    ) {}

    @ApiBody({
        type: CreateProviderDto,
        description: 'new provider data',
        required: true
    })
    @Post('/')
    @HttpCode(HttpStatus.CREATED)
    async create(
        @Body() provider:CreateProviderDto
    ){
        return provider
    }    

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    async findOne (
        @Param('id', ParseIntPipe) id:number
    ) {
        try {
            return this.providerService.findOne(id)
        } catch (error) {
            throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    @Get('/:id/products')
    @HttpCode(HttpStatus.OK)
    async findAll (
        @Param('id', ParseIntPipe) id:number
    ) {
        try {
            return await this.providerService.findOneWithProducts(id);
        } catch (error) {
            throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    // @Delete('/:id')
    // async delete (
    //     @Param('id', ParseIntPipe) id:number
    // ) {
    //     return { id }
    // }
}
