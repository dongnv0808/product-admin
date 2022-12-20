
import { User } from '../users/entities/user.entity';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { BaseRepository } from 'src/base/base';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductRepository extends BaseRepository<Product> {
    private _repository: Repository<Product>;
    constructor(@InjectRepository(Product) productRepo: Repository<Product>) {
        super(productRepo);
        this._repository = productRepo;
    }
}

