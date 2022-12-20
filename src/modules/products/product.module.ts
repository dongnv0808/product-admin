import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductsService } from './product.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { ProductRepository } from './product.repository';

@Module({
  controllers: [ProductController],
  imports: [TypeOrmModule.forFeature([Product])],
providers: [ProductsService, ProductRepository],
})
export class ProductModule {}
