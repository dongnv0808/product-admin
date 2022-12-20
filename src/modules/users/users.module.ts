import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserRepository } from './user.repository';

@Module({
  controllers: [UsersController],
  imports: [TypeOrmModule.forFeature([User])],
providers: [UsersService, UserRepository],
})
export class UsersModule {}
