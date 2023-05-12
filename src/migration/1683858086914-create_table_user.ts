import { MigrationInterface, QueryRunner } from "typeorm"

export class CreateTableUser1683858086914 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
                CREATE TABLE public.user (
                    user_id integer NOT NULL,
                    user_name character varying NOT NULL,
                    user_email  character varying NOT NULL,
                    user_cpf  character varying NOT NULL,
                    type_user int NOT NULL,
                    user_phone  character varying NOT NULL,
                    user_password  character varying NOT NULL,
                    created_at timestamp without time zone DEFAULT now() NOT NULL,
                    updated_at timestamp without time zone DEFAULT now() NOT NULL,
                    primary key (user_id)
                );
                
                CREATE SEQUENCE public.user_id_seq
                    AS integer
                    START WITH 1
                    INCREMENT BY 1
                    NO MINVALUE
                    NO MAXVALUE
                    CACHE 1;
                    
                ALTER SEQUENCE public.user_id_seq OWNED BY public.user.user_id;
                
                ALTER TABLE ONLY public.user ALTER COLUMN user_id SET DEFAULT nextval('public.user_id_seq'::regclass);
            `);
      }
    
      public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
                drop table public.user;
            `);
      }

}
