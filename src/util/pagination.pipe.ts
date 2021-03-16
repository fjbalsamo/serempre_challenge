import { 
    PipeTransform, 
    Injectable, 
    ArgumentMetadata, 
    BadRequestException 
} from '@nestjs/common';



@Injectable()
export class ParsePaginationPipe implements PipeTransform<string,number> {
    
    transform(value:string, metadata:ArgumentMetadata){

        const int = parseInt(value);

        if(isNaN(int) || parseInt(value) < 1) 
            throw new BadRequestException(`${metadata.data} value must be a number > 0`)

        return int
    }
}