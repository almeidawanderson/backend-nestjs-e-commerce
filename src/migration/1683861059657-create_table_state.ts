import { MigrationInterface, QueryRunner } from "typeorm"

export class CreateTableState1683861059657 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
                CREATE TABLE public.state (
                    state_id integer NOT NULL,
                    state_name character varying NOT NULL,
                    created_at timestamp without time zone DEFAULT now() NOT NULL,
                    updated_at timestamp without time zone DEFAULT now() NOT NULL,
                    primary key (state_id)
                );
    
                CREATE SEQUENCE public.state_id_seq
                    AS integer
                    START WITH 1
                    INCREMENT BY 1
                    NO MINVALUE
                    NO MAXVALUE
                    CACHE 1;
                    
                ALTER SEQUENCE public.state_id_seq OWNED BY public.state.state_id;
    
                ALTER TABLE ONLY public.state ALTER COLUMN state_id SET DEFAULT nextval('public.state_id_seq'::regclass);
            `);
      }
    
      public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
                drop table public.state;
            `);
      }

}
