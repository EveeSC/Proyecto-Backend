import mongoose from "mongoose";
import { Motoristas } from "./motoristas.model";
import{Pedidos} from "./pedidos.model";

const schema = new mongoose.Schema<Motoristas>({
        "nombre" : String,
        "telefono" : String,
        "correo" : String,
        "imagen" : String,
        "pedidosPendientes" : Array<Pedidos>
});

export const MotoristasSchema = mongoose.model('motoristas',schema);