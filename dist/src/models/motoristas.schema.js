"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MotoristasSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    "nombre": String,
    "telefono": String,
    "correo": String,
    "imagen": String,
    "pedidosPendientes": (Array)
});
exports.MotoristasSchema = mongoose_1.default.model('motoristas', schema);
