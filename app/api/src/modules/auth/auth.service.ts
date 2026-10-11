import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto.js';
import { UpdateAuthDto } from './dto/update-auth.dto.js';
import { RedisService } from '../redis/redis.service.js';

@Injectable()
export class AuthService {
  constructor(private readonly redis: RedisService) {}

  async create(createAuthDto: CreateAuthDto) {
    await this.redis.set('test:user', 'user', 60);
    return {
      message: 'testing done',
    };
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
