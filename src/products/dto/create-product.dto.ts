import { Length, IsNotEmpty, IsNumber, IsAlpha } from 'class-validator';
export class CreateProductDto {
    @IsNotEmpty()
    @Length(3, 20)
    @IsAlpha()
    title: string;

    @IsNotEmpty()
    description: string;

    @IsNotEmpty()
    @IsNumber()
    price: number;
}
