import { Module} from '@nestjs/common';
import { CacheService } from './cache.service';
import { CacheController } from './cache.controller';
import {CacheModule as CacheModuleNest} from '@nestjs/cache-manager'


@Module({
  imports: [
    CacheModuleNest.register({
      ttl: 90000000            
    })      
  ],
  controllers: [CacheController],
  providers: [CacheService],
  exports: [CacheService]
})
export class CacheModule {}
