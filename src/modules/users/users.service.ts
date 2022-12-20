import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { CreateUserDto } from './dto/create-user.dto';
import { PageOptionsDto } from '../../paginations/page-option.dto';
import { PageMetaDto } from '../../paginations/page-meta.dto';
import { PageDto } from '../../paginations/page.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) {}

  async getAll(pageOptionsDto: PageOptionsDto) {
    const queryBuilder = this.userRepository.createQueryBuilder('user');
    queryBuilder
      .orderBy('user.id', pageOptionsDto.order)
      .skip(pageOptionsDto.skip)
      .take(pageOptionsDto.take);
    console.log(queryBuilder);
    const itemCount = await queryBuilder.getCount();
    const { entities } = await queryBuilder.getRawAndEntities();
    const pageMetaDto = new PageMetaDto({ itemCount, pageOptionsDto });
    return new PageDto(entities, pageMetaDto);
  }
  async createUser(user: CreateUserDto) {
    return await this.userRepository.save(user);
  }
}
