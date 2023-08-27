import mongoose from "mongoose";
import { Pedidos } from "./pedidos.model";

const schema= new mongoose.Schema<Pedidos>({
    "producto": String,
    "imagen":String,
    "cantidad":Number,
    "cliente": Object,
    "estado":false
});

export const UserSchema = mongoose.model('pedidos',schema);