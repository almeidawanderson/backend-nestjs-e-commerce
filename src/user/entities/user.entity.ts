import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({name: 'user'})
export class UserEntity {

  @PrimaryGeneratedColumn('rowid')
  user_id: number;

  @Column({name: 'user_name', nullable: false})
  user_name: string;

  @Column({name: 'user_email', nullable: false})
  user_email: string;

  @Column({name: 'user_phone', nullable: false})
  user_phone: string;

  @Column({name: 'user_cpf', nullable: false})
  user_cpf: string

  @Column({name: 'user_password', nullable: false})
  user_password: string;



}
