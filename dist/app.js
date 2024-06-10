"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("express-async-errors");
const handleError_1 = require("./error/handleError");
const cors_1 = __importDefault(require("cors"));
const router_user_1 = __importDefault(require("./router/router.user"));
const routerUserNotAdmin_router_1 = __importDefault(require("./router/routerUserNotAdmin.router"));
const movie_router_1 = __importDefault(require("./router/private/movie.router"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: true,
}));
app.use((0, cors_1.default)({
    origin: "http://localhost:5173",
}));
app.use("/user", router_user_1.default);
app.use("/cinefusion", routerUserNotAdmin_router_1.default);
app.use("/priv", movie_router_1.default);
app.use(handleError_1.handlreErrors);
exports.default = app;
