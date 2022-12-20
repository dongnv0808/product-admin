import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ProductsService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('products')
export class ProductController {
    constructor(
        private readonly producService: ProductsService
    ){}

    @Get()
    async findAll() {
        return await this.producService.getAll()
    }

    @Post()
    async create(@Body() body:CreateProductDto){
        return await this.producService.createProduct(body)
    }
    
    @Put("/:code")
    async update(@Param() code: string, @Body() body: UpdateProductDto){
        return await this.producService.updateProduct(code, body)
    }
}
