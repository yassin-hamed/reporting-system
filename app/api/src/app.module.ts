import { Module } from '@nestjs/common';
import { RedisModule } from './modules/redis/redis.module.js';
import { AuthModule } from './modules/auth/auth.module.js';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), RedisModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
