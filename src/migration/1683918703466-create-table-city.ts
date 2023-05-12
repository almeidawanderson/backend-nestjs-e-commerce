import { MigrationInterface, QueryRunner } from "typeorm"

export class CreateTableCity1683918703466 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
                CREATE TABLE public.city (
                    city_id integer NOT NULL,
                    state_id integer NOT NULL,
                    city_name character varying NOT NULL,
                    created_at timestamp without time zone DEFAULT now() NOT NULL,
                    updated_at timestamp without time zone DEFAULT now() NOT NULL,
                    primary key (city_id),
                    foreign key (state_id) references public.state(state_id)
                );
      
                CREATE SEQUENCE public.city_id_seq
                    AS integer
                    START WITH 1
                    INCREMENT BY 1
                    NO MINVALUE
                    NO MAXVALUE
                    CACHE 1;
                    
                ALTER SEQUENCE public.city_id_seq OWNED BY public.city.city_id;
      
                ALTER TABLE ONLY public.city ALTER COLUMN city_id SET DEFAULT nextval('public.city_id_seq'::regclass);
            `);
      }
      
      public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
                drop table public.city;
            `);
      }

}
