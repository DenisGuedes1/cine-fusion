"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDataBase = exports.client = void 0;
const conection_1 = __importDefault(require("./conection"));
exports.connectDataBase = conection_1.default;
const config_1 = __importDefault(require("./config"));
exports.client = config_1.default;
