import {
    Controller,
    Post,
    Body,
    Get,
    Param,
    Put,
    Patch,
    Delete,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './interface/product.interface';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('products')
export class ProductsController {
    constructor(private readonly productService: ProductsService) {}

    @Post()
    async addProduct(@Body() createProductDto: CreateProductDto) {
        return await this.productService.insertProduct(createProductDto);
    }

    @Get()
    async getAllProducts() {
        return await this.productService.findAllProducts();
    }

    @Get(':id')
    async getProductById(@Param('id') id: string) {
        return await this.productService.getProductById(id);
    }

    @Patch(':id')
    updateProduct(
        @Param('id') id: string,
        @Body() updateProductDto: UpdateProductDto,
    ) {
        return this.productService.updateProduct(id, updateProductDto);
    }

    @Delete(':id')
    async deleteProduct(@Param('id') id: string) {
        return this.productService.deleteProduct(id);
    }
}
