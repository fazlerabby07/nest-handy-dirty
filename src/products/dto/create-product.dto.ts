import { Length, IsNotEmpty, IsNumber, IsAlpha } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateProductDto {
    @ApiProperty({ example: 'Laptop', description: 'The name of the Product' })
    @IsNotEmpty()
    @Length(3, 20)
    @IsAlpha()
    title: string;

    @ApiProperty({
        example: 'This is a Laptop product',
        description: 'The description of the Product',
    })
    @IsNotEmpty()
    description: string;

    @ApiProperty({ example: 299.99, description: 'Price of the Product' })
    @IsNotEmpty()
    @IsNumber()
    price: number;
}
