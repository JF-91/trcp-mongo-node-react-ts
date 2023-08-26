"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.publicProcedure = exports.router = void 0;
const express_1 = __importDefault(require("express"));
const server_1 = require("@trpc/server");
const app = (0, express_1.default)();
const t = server_1.initTRPC.create();
exports.router = t.router;
exports.publicProcedure = t.procedure;
app.listen(3000);
console.log('server run on port 3000');
