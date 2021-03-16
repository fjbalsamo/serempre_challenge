import { IsPhoneNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmptyString } from '../../customValidators/isNotEmptyString';

export class CreateProviderDto {

    @ApiProperty({
        type: String,
        required: true,
        example: 'awesome company'
    })
    @IsNotEmptyString({
        message: `company name is required`
    })
    companyName:string;

    @ApiProperty({
        type: String,
        required: true,
        example: 'Jhon Doe'
    })
    @IsNotEmptyString({
        message: `company contact name is required`
    })
    contactName:string;

    @ApiProperty({
        type: String,
        required: true,
        example: 'Sales Departament'
    })
    @IsNotEmptyString({
        message: `company contact title is required`
    })
    contactTitle:string;

    @ApiProperty({
        type: String,
        required: true,
        example: '1234 fake street'
    })
    @IsNotEmptyString({
        message: `company address is required`
    })
    address:string;

    @ApiProperty({
        type: String,
        required: true,
        example: 'Springfield'
    })
    @IsNotEmptyString({
        message: `company city is required`
    })
    city:string;

    @ApiProperty({
        type: String,
        required: true,
        example: 'north america'
    })
    @IsNotEmptyString({
        message: `company region is required`
    })
    region:string;

    @ApiProperty({
        type: String,
        required: true,
        example: 'S2452EGB'
    })
    @IsNotEmptyString({
        message: `company postal code is required`
    })
    postalCode:string;

    @ApiProperty({
        type: String,
        required: true,
        example: 'USA'
    })
    @IsNotEmptyString({
        message: `campany country is required`
    })
    country:string;

    @ApiProperty({
        type: String,
        required: true,
        example: '+54 9 3406 00-0000'
    })
    @IsNotEmptyString({
        message: `company phone is required`
    })
    @IsPhoneNumber('AR', {
        message: `phone number format incorrect`
    })
    phone:string;

    @ApiProperty({
        required: false,
        default: null
    })
    fax?:string;

    @ApiProperty({
        required: false,
        default: null
    })
    homePage?:string;

}