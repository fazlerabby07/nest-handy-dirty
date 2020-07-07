import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    const options = new DocumentBuilder()
        .setTitle('Nest hand dirty.')
        .setDescription('This is the basic implementation of nest js.')
        .setVersion('1.0')
        .addTag('Basic Crud for nest.')
        .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('api', app, document);

    app.useGlobalPipes(new ValidationPipe());

    await app.listen(3000);
}
bootstrap();
