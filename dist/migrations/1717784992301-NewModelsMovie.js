"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewModelsMovie1717784992301 = void 0;
class NewModelsMovie1717784992301 {
    constructor() {
        this.name = 'NewModelsMovie1717784992301';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TABLE "movie" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "imdb_id" character varying NOT NULL, "adult" boolean NOT NULL, "backdrop_path" character varying NOT NULL, "genre_ids" text NOT NULL, "media_type" character varying NOT NULL, "original_language" character varying NOT NULL, "original_title" character varying NOT NULL, "overview" character varying NOT NULL, "popularity" integer NOT NULL, "poster_path" character varying NOT NULL, "release_date" character varying NOT NULL, "title" character varying NOT NULL, "video" boolean NOT NULL, "vote_average" integer NOT NULL, "vote_count" integer NOT NULL, CONSTRAINT "PK_cb3bb4d61cf764dc035cbedd422" PRIMARY KEY ("id"))`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`DROP TABLE "movie"`);
        });
    }
}
exports.NewModelsMovie1717784992301 = NewModelsMovie1717784992301;
