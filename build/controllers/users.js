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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("../models/user"));
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_1.default.create(req.body);
    if (user != undefined) {
        res.status(200).json({ status: 'Success', user: user });
    }
    else {
        res.status(422).json({ status: 'failure', message: 'Unable to create' });
    }
});
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = yield user_1.default.find({ _id: id });
    if (user != undefined) {
        res.status(200).json({ status: 'Success', user: user });
    }
    else {
        res.status(422).json({ status: 'failure', message: 'Unable to find' });
    }
});
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield user_1.default.find({});
    if (users != undefined) {
        res.status(200).json({ status: 'Success', users: users });
    }
    else {
        res.status(422).json({ status: 'failure', message: 'Unable to find' });
    }
});
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = yield user_1.default.find({ _id: id });
    if (user != undefined) {
        const updateUser = yield user_1.default.updateOne({ _id: id }, req.body);
        res.status(200).json({ status: 'Success', message: 'Update Success', user: updateUser });
    }
    else {
        res.status(200).json({ status: 'Failed', message: 'Update Failed' });
    }
});
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = yield user_1.default.find({ _id: id });
    if (user != undefined) {
        yield user_1.default.deleteOne({ _id: id });
        res.status(200).json({ status: 'Success', message: 'Delete Success' });
    }
    else {
        res.status(200).json({ status: 'Failed', message: 'Delete Failed' });
    }
});
exports.default = { createUser, getUser, getUsers, updateUser, deleteUser };
