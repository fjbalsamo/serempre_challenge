import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { CategoriesModule } from './categories/categories.module';
import { ProvidersModule } from './providers/providers.module';

@Module({
  imports: [ProductsModule, CategoriesModule, ProvidersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
