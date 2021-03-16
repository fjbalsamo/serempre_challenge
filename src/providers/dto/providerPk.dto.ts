import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';
import { CreateProviderDto } from './createProvider.dto';

export class ProviderPkDto extends CreateProviderDto {

    @ApiProperty({
        type: Number,
        minimum: 0,
        required: false,
        description: `provider primary key`,
        default: undefined
    })
    @IsNumber({
        maxDecimalPlaces: 0,
        allowInfinity: false,
        allowNaN: false,
    })
    id?:number
}