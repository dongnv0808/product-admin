import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UserRepository)
        private userRepository: UserRepository
    ){}
    async getAll() {
        return await this.userRepository.find()
    }
    async createUser(user: CreateUserDto){
        return await this.userRepository.save(user)
    }
}
