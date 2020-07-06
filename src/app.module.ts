import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ProductsModule } from './products/products.module';

@Module({
    imports: [
        ProductsModule,
        MongooseModule.forRoot(
            'mongodb://root:root@localhost:27017/nest?authSource=admin',
        ),
    ],
})
export class AppModule {}
