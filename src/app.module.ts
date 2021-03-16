import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { CategoriesModule } from './categories/categories.module';
import { ProvidersModule } from './providers/providers.module';

import { CategoryEntity } from './categories/entity';
import { ProductEntity } from './products/entity';
import { ProviderEntity } from './providers/entity'

const OrmModule = TypeOrmModule.forRoot({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'db_serempre',
  synchronize: true,
  entities: [
    CategoryEntity,
    ProviderEntity,
    ProductEntity
  ]
})

@Module({
  imports: [
    OrmModule,
    ProductsModule, 
    CategoriesModule, 
    ProvidersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
