import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterColum1718031540648 implements MigrationInterface {
    name = 'AlterColum1718031540648'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "movie" ADD CONSTRAINT "UQ_f05604ea5d74a15426885d74e27" UNIQUE ("imdb_id")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "movie" DROP CONSTRAINT "UQ_f05604ea5d74a15426885d74e27"`);
    }

}
