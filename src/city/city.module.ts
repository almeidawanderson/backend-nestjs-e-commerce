import { Module } from '@nestjs/common';
import {CacheModule} from "@nestjs/cache-manager"
import { CityService } from './city.service';
import { CityController } from './city.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CityEntity } from './entities/city.entity';

@Module({
  imports: [CacheModule.register({
    ttl: 9000000000000,   
  }), TypeOrmModule.forFeature([CityEntity])],
  controllers: [CityController],
  providers: [CityService]
})
export class CityModule {}
