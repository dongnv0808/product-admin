import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { AttributeService } from './attribute.service';
import { CreateAttributeDto } from './dto/create-attribute.dto';
import { UpdateAttributeDto } from './dto/update-attribute.dto';

@Controller('attributes')
export class AttributeController {
    constructor(
        private readonly attributeService: AttributeService
    ){}
    
    @Get()
    async findAll() {
        return await this.attributeService.getAll()
    }

    @Post()
    async create(@Body() body: CreateAttributeDto){
        return await this.attributeService.createAttribute(body)
    }
    
    @Put("/:code")
    async update(@Param() code: string, @Body() body: UpdateAttributeDto){
        return await this.attributeService.updateAttribute(code, body)
    }
}
