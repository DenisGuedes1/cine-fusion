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
exports.revertAlterTypePopulityMovie1717786662807 = void 0;
class revertAlterTypePopulityMovie1717786662807 {
    constructor() {
        this.name = 'revertAlterTypePopulityMovie1717786662807';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "movie" DROP COLUMN "popularity"`);
            yield queryRunner.query(`ALTER TABLE "movie" ADD "popularity" numeric(10,4) NOT NULL`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "movie" DROP COLUMN "popularity"`);
            yield queryRunner.query(`ALTER TABLE "movie" ADD "popularity" character varying NOT NULL`);
        });
    }
}
exports.revertAlterTypePopulityMovie1717786662807 = revertAlterTypePopulityMovie1717786662807;