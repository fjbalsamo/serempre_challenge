import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProvidersService } from './providers.service';
import { ProvidersController } from './providers.controller';
import { ProviderEntity } from './entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ProviderEntity
    ])
  ],
  providers: [ProvidersService],
  controllers: [ProvidersController]
})
export class ProvidersModule {}
