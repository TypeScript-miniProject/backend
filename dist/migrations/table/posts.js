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
const posts_1 = require("../../models/posts");
console.log("======Create users Table======");
const create_table_users = () => __awaiter(void 0, void 0, void 0, function* () {
    yield posts_1.default.sync({ force: true })
        .then(() => {
        console.log("✅Success Create users Table");
    })
        .catch((err) => {
        console.log("❗️Error in Create users Table : ", err);
    });
});
create_table_users();
