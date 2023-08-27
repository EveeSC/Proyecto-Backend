import mongoose from "mongoose";
import {BasePedidos} from "./pedidos.model";

export interface Motorista {
        _id : mongoose.Types.ObjectId;
        "nombre" : string,
        "telefono" : string,
        "correo" : string,
        "imagen" : string,
        "pedidosPendientes" : Array<BasePedidos>;
}