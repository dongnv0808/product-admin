import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
    constructor(
        private readonly usersService: UsersService
    ){}
    @Get()
    async findAll() {
        return await this.usersService.getAll()
    }
    @Post()
    async create(@Body() createUserDto:CreateUserDto){
        return await this.usersService.createUser(createUserDto)
    }
}
