import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AttributeRepository } from './attribute.repository';
import { CreateAttributeDto } from './dto/create-attribute.dto';
import { UpdateAttributeDto } from './dto/update-attribute.dto';

@Injectable()
export class AttributeService {
    constructor(
        @InjectRepository(AttributeRepository)
        private attributeRepository: AttributeRepository
    ){}

    async getAll() {
        return await this.attributeRepository.find()
    }

    async createAttribute(attribute: CreateAttributeDto){
        return await this.attributeRepository.save(attribute)
    }
    async updateAttribute(code: string, attribute: UpdateAttributeDto){
        return await this.attributeRepository.update(code, attribute)
    }
}
