import { registerDecorator, ValidationOptions } from 'class-validator';

export const IsNotEmptyString = (
    validationOptions?:ValidationOptions
) => {
    return (object:Object, propertyName:string) => {
        registerDecorator({
            name: 'IsNotEmptyString',
            target: object.constructor,
            propertyName,
            constraints: [],
            options: validationOptions,
            validator: {
                validate(value:any){
                    return typeof value === 'string' && value.trim().length > 0
                }
            }
        })
    }
}