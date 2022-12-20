import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductRepository } from './product.repository';

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(ProductRepository)
        private productRepository: ProductRepository
    ){}

    async getAll() {
        return await this.productRepository.find()
    }

    async createProduct(body: CreateProductDto){
        return await this.productRepository.save(body)
    }
    async updateProduct(code: string, body: UpdateProductDto){
        return await this.productRepository.update(code, body)
    }
}
