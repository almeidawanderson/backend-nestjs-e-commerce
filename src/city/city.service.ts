import {  Inject, Injectable } from '@nestjs/common';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
import { CityEntity } from './entities/city.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {Cache} from 'cache-manager'
import {CACHE_MANAGER} from '@nestjs/cache-manager'
import { CacheService } from 'src/cache/cache.service';

@Injectable()
export class CityService {
  constructor(
    @InjectRepository(CityEntity)
    private readonly cityRepositoru: Repository<CityEntity>,
    private readonly cacheService: CacheService,

  ) {}
  create(createCityDto: CreateCityDto) {
    return 'This action adds a new city';
  }

  findAll() {
    return `This action returns all city`;
  }

  async getAllCitiesByStateId(state_id: number): Promise<CityEntity[]> { 
    return this.cacheService.getCache<CityEntity[]>(`state_${state_id}`, 
    () => this.cityRepositoru.find({
      where: {
        state_id,
      }      
    })
    ) 

  }

  

  findOne(id: number) {
    return `This action returns a #${id} city`;
  }

  update(id: number, updateCityDto: UpdateCityDto) {
    return `This action updates a #${id} city`;
  }

  remove(id: number) {
    return `This action removes a #${id} city`;
  }
}
