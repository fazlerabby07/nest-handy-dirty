import {
    Length,
    IsNotEmpty,
    IsNumber,
    IsAlpha,
    IsOptional,
} from 'class-validator';

export class UpdateProductDto {
    @IsOptional()
    @IsNotEmpty()
    @Length(3, 20)
    @IsAlpha()
    title?: string;

    @IsOptional()
    @IsNotEmpty()
    description?: string;

    @IsOptional()
    @IsNotEmpty()
    @IsNumber()
    price?: number;
}
