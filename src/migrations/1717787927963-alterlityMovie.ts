import { MigrationInterface, QueryRunner } from "typeorm";

export class alterlityMovie1717787927963 implements MigrationInterface {
    name = 'alterlityMovie1717787927963'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "movie" DROP COLUMN "vote_average"`);
        await queryRunner.query(`ALTER TABLE "movie" ADD "vote_average" numeric(10,4) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "movie" DROP COLUMN "vote_average"`);
        await queryRunner.query(`ALTER TABLE "movie" ADD "vote_average" integer NOT NULL`);
    }

}
