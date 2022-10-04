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
const Client = require("serverless-mysql");
module.exports.run = (event, context) => __awaiter(void 0, void 0, void 0, function* () {
    const client = Client({
        config: {
            host: process.env.DB_HOST,
            database: process.env.DB_NAME,
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            port: 3309,
        },
    });
    const req = yield client.query("SELECT * FROM bookchat_schedules");
    const time = new Date();
    console.log(`Your cron function "${context.functionName}" ran at ${time}`);
    return req;
});
