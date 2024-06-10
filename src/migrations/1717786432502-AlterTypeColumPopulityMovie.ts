import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterTypeColumPopulityMovie1717786432502 implements MigrationInterface {
    name = 'AlterTypeColumPopulityMovie1717786432502'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "movie" DROP COLUMN "popularity"`);
        await queryRunner.query(`ALTER TABLE "movie" ADD "popularity" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "movie" DROP COLUMN "popularity"`);
        await queryRunner.query(`ALTER TABLE "movie" ADD "popularity" integer NOT NULL`);
    }

}
