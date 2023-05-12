import { Module } from '@nestjs/common';
import { AddressService } from './address.service';
import { AddressController } from './address.controller';
import {CacheModule} from '@nestjs/cache-manager'

@Module({
  controllers: [AddressController],
  providers: [AddressService]
})
export class AddressModule {}
