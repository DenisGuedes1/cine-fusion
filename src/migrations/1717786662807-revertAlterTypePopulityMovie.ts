import { MigrationInterface, QueryRunner } from "typeorm";

export class revertAlterTypePopulityMovie1717786662807 implements MigrationInterface {
    name = 'revertAlterTypePopulityMovie1717786662807'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "movie" DROP COLUMN "popularity"`);
        await queryRunner.query(`ALTER TABLE "movie" ADD "popularity" numeric(10,4) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "movie" DROP COLUMN "popularity"`);
        await queryRunner.query(`ALTER TABLE "movie" ADD "popularity" character varying NOT NULL`);
    }

}
