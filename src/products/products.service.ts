import {
    Injectable,
    NotFoundException,
    InternalServerErrorException,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './interface/product.interface';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
    constructor(
        @InjectModel('Product') private readonly productModel: Model<Product>,
    ) {}

    async insertProduct(creatProductDto: CreateProductDto): Promise<Product> {
        try {
            const newProduct = new this.productModel(creatProductDto);
            const product = await newProduct.save();
            return product;
        } catch (error) {
            throw new InternalServerErrorException(error.message);
        }
    }

    async findAllProducts(): Promise<Product[]> {
        try {
            const products = await this.productModel.find().exec();
            return products;
        } catch (error) {
            throw new InternalServerErrorException(error.message);
        }
    }

    async getProductById(id: string): Promise<Product> {
        try {
            const product = await this.findProduct(id);
            return product;
        } catch (error) {
            throw new InternalServerErrorException(error.message);
        }
    }

    async updateProduct(
        id: string,
        updateProductDto: UpdateProductDto,
    ): Promise<Product> {
        try {
            const updateProduct = await this.productModel.findByIdAndUpdate(
                id,
                updateProductDto,
                { new: true },
            );

            return updateProduct;
        } catch (error) {
            throw new InternalServerErrorException(error.message);
        }
    }

    async deleteProduct(id: string) {
        try {
            const deleteProduct = await this.productModel.remove({ _id: id });
            return deleteProduct;
        } catch (error) {
            throw new InternalServerErrorException(error.message);
        }
    }

    private async findProduct(id: string): Promise<Product> {
        try {
            const product = await this.productModel.findById(id);
            if (!product) {
                throw new NotFoundException('could not find product');
            }
            return product;
        } catch (error) {
            throw new InternalServerErrorException(error.message);
        }
    }
}
