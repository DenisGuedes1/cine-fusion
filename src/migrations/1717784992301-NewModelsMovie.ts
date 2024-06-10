import { MigrationInterface, QueryRunner } from "typeorm";

export class NewModelsMovie1717784992301 implements MigrationInterface {
    name = 'NewModelsMovie1717784992301'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "movie" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "imdb_id" character varying NOT NULL, "adult" boolean NOT NULL, "backdrop_path" character varying NOT NULL, "genre_ids" text NOT NULL, "media_type" character varying NOT NULL, "original_language" character varying NOT NULL, "original_title" character varying NOT NULL, "overview" character varying NOT NULL, "popularity" integer NOT NULL, "poster_path" character varying NOT NULL, "release_date" character varying NOT NULL, "title" character varying NOT NULL, "video" boolean NOT NULL, "vote_average" integer NOT NULL, "vote_count" integer NOT NULL, CONSTRAINT "PK_cb3bb4d61cf764dc035cbedd422" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "movie"`);
    }

}
