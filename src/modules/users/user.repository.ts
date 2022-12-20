
import { User } from '../users/entities/user.entity';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { BaseRepository } from 'src/base/base';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserRepository extends BaseRepository<User> {
    private _repository: Repository<User>;
    constructor(@InjectRepository(User) userRepo: Repository<User>) {
        super(userRepo);
        this._repository = userRepo;
    }
}

