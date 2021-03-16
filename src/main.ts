import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

const swaggerConf = new DocumentBuilder()
.setTitle(`Serempre Challege`)
.setDescription(`serempre nodeJS challenge`)
.setVersion('1.0.0')
.addTag('serempre, challenge')
.build()

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  //prefix /api/* 
  app.setGlobalPrefix('api')

  app.useGlobalPipes(new ValidationPipe())

  const document = SwaggerModule.createDocument(app, swaggerConf);
  SwaggerModule.setup('docs', app, document);
  
  await app.listen(3000);
}
bootstrap();
