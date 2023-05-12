import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity({name: 'state'})
export class StateEntity {
  @PrimaryGeneratedColumn('rowid')
  state_id: number;

  @Column({name: 'state_name', nullable: false})
  state_name: string;

  @CreateDateColumn({name: 'created_at'})
  created_at: Date

  @UpdateDateColumn({name: 'updated_at'})
  updated_at: Date



}
