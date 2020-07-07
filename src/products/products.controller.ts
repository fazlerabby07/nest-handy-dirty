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
import {
    ApiBearerAuth,
    ApiOperation,
    ApiResponse,
    ApiTags,
} from '@nestjs/swagger';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@ApiBearerAuth()
@ApiTags('Product Crud')
@Controller('products')
export class ProductsController {
    constructor(private readonly productService: ProductsService) {}

    @Post()
    @ApiOperation({ summary: 'Create Product' })
    @ApiResponse({})
    async addProduct(@Body() createProductDto: CreateProductDto) {
        return await this.productService.insertProduct(createProductDto);
    }

    @Get()
    @ApiOperation({ summary: 'Get All Products' })
    @ApiResponse({})
    async getAllProducts() {
        return await this.productService.findAllProducts();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Get Product by ProductId' })
    @ApiResponse({})
    async getProductById(@Param('id') id: string) {
        return await this.productService.getProductById(id);
    }

    @Patch(':id')
    @ApiOperation({ summary: 'Update a Product by ProductId' })
    @ApiResponse({})
    updateProduct(
        @Param('id') id: string,
        @Body() updateProductDto: UpdateProductDto,
    ) {
        return this.productService.updateProduct(id, updateProductDto);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Delete a Product by ProductId' })
    @ApiResponse({})
    async deleteProduct(@Param('id') id: string) {
        return this.productService.deleteProduct(id);
    }
}
