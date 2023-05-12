import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name: 'city'})
export class CityEntity {
  @PrimaryGeneratedColumn('rowid')
  city_id: number;

  @Column({name: 'state_id', nullable: false})
  state_id: number;

  @Column({name: 'city_name', nullable: false})
  city_name: number;

  @CreateDateColumn({name: 'created_at'})
  created_at: Date

  @UpdateDateColumn({name: 'updated_at'})
  updated_at: Date





}
