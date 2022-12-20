
import { User } from '../users/entities/user.entity';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { BaseRepository } from 'src/base/base';
import { InjectRepository } from '@nestjs/typeorm';
import { Attribute } from './entities/attribute.entity';

@Injectable()
export class AttributeRepository extends BaseRepository<Attribute> {
    private _repository: Repository<Attribute>;
    constructor(@InjectRepository(Attribute) attributeRepo: Repository<Attribute>) {
        super(attributeRepo);
        this._repository = attributeRepo;
    }
}

