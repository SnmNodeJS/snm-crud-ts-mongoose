"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_1 = __importDefault(require("../controllers/users"));
const router = (0, express_1.Router)();
router.post('/', users_1.default.createUser);
router.get('/:id', users_1.default.getUser);
router.get('/', users_1.default.getUsers);
router.patch('/:id', users_1.default.updateUser);
router.delete('/:id', users_1.default.deleteUser);
exports.default = router;
