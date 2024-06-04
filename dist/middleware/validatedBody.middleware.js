"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateDataMiddleware = void 0;
const validateDataMiddleware = (schema) => (req, resp, next) => {
    const validadeData = schema.parse(req.body);
    req.body = validadeData;
    return next();
};
exports.validateDataMiddleware = validateDataMiddleware;
