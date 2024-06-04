"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatedUserSchema = exports.loginUserSchema = exports.returnCreatedUser = exports.createdUserSchema = void 0;
const zod_1 = require("zod");
const bcryptjs_1 = require("bcryptjs");
exports.createdUserSchema = zod_1.z.object({
    name: zod_1.z.string(),
    email: zod_1.z.string().email(),
    password: zod_1.z.string().transform((pass) => {
        return (0, bcryptjs_1.hashSync)(pass, 10);
    }),
    avatar: zod_1.z.string().default(""),
    isAdmin: zod_1.z.boolean().default(false),
    reset_token: zod_1.z.string().nullable().default(null),
    activate: zod_1.z.boolean().default(false)
});
exports.returnCreatedUser = exports.createdUserSchema.extend({
    id: zod_1.z.string(),
});
exports.loginUserSchema = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z.string(),
});
exports.UpdatedUserSchema = zod_1.z
    .object({
    name: zod_1.z.string(),
    email: zod_1.z.string().email(),
    password: zod_1.z.string().transform((pass) => {
        return (0, bcryptjs_1.hashSync)(pass, 10);
    }),
    avatar: zod_1.z.string().default(""),
    isAdmin: zod_1.z.boolean().default(false),
    reset_token: zod_1.z.string().nullable(),
})
    .partial();
