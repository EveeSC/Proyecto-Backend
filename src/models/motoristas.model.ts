import mongoose from "mongoose";
import {Pedidos} from "./pedidos.model";

export interface Motoristas {
        _id : mongoose.Types.ObjectId;
        "nombre" : string,
        "telefono" : string,
        "correo" : string,
        "imagen" : string,
        "pedidosPendientes" : Array<Pedidos>;
}