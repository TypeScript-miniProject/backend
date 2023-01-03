"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const post_1 = require("./post");
const router = (0, express_1.Router)();
router.use('/post', post_1.default);
exports.default = router;
