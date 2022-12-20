import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AttributeController } from './attribute.controller';
import { AttributeRepository } from './attribute.repository';
import { AttributeService } from './attribute.service';
import { Attribute } from './entities/attribute.entity';

@Module({
  controllers: [AttributeController],
  imports: [TypeOrmModule.forFeature([Attribute])],
providers: [AttributeService, AttributeRepository],
})
export class ProductModule {}
