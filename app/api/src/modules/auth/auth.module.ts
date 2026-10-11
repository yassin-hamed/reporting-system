import { Module } from '@nestjs/common';
import { AuthService } from './auth.service.js';
import { AuthController } from './auth.controller.js';
import { RedisModule } from '../redis/redis.module.js';
import { RedisService } from '../redis/redis.service.js';

@Module({
  imports: [RedisModule],
  controllers: [AuthController],
  providers: [AuthService, RedisService],
})
export class AuthModule {}
