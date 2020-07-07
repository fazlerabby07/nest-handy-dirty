import {
    Length,
    IsNotEmpty,
    IsNumber,
    IsAlpha,
    IsOptional,
} from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateProductDto {
    @ApiPropertyOptional({
        example: 'Laptop',
        description: 'The name of the Product',
    })
    @IsOptional()
    @IsNotEmpty()
    @Length(3, 20)
    @IsAlpha()
    title?: string;

    @ApiPropertyOptional({
        example: 'This is a Laptop product',
        description: 'The description of the Product',
    })
    @IsOptional()
    @IsNotEmpty()
    description?: string;

    @ApiPropertyOptional({
        example: 299.99,
        description: 'Price of the Product',
    })
    @IsOptional()
    @IsNotEmpty()
    @IsNumber()
    price?: number;
}
