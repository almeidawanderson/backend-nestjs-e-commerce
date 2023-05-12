import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity({name: 'address', schema: 'public'})
export class AddressEntity {
  @PrimaryGeneratedColumn('rowid')
  address_id: number;

  @Column({name: 'user_id', nullable: false})
  user_id: number;

  @Column({name: 'complement', nullable: true})
  complement: number;

  @Column({name: 'number', nullable: false})
  number_address: number;

  @Column({name: 'cep', nullable: false})
  cep: string;

  @Column({name: 'city_id', nullable: false})
  city_id: number;

  @CreateDateColumn({name: 'created_at'})
  created_at: Date;

  @UpdateDateColumn({name: 'updated_at'})
  update_at: Date;

  


}
