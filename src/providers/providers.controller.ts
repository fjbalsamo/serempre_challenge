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

    @ApiBody({
        type: CreateProviderDto,
        description: 'updated provider data'
    })
    @Put('/:id')
    @HttpCode(HttpStatus.OK)
    async update(
        @Param('id', ParseIntPipe) id:number,
        @Body() provider:CreateProviderDto
    ){
        return {
            id,
            ...provider
        }
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    async findOne (
        @Param('id', ParseIntPipe) id:number
    ) {
        return { id, name: 'the name', othterAttr: 'otros' }
    }

    @Get('/')
    @HttpCode(HttpStatus.OK)
    async findAll (
    ) {
        return [
            {
                id: 1,
                name: 'category 1'
            },
            {
                id: 2,
                name: 'category 2'
            }
        ]
    }

    @Delete('/:id')
    async delete (
        @Param('id', ParseIntPipe) id:number
    ) {
        return { id }
    }
}
