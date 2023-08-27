import mongoose from "mongoose";

export interface Cliente {
    _id:mongoose.Types.ObjectId,
    "SaldoCancelar": string,
    "nombreCliente" : string,
    "ubicacion":string,
    "limiteEntrega":string,
    "horaLimite" : string
}

export interface BasePedidos {
    _id: mongoose.Types.ObjectId,
    "producto": string,
    "imagen":string,
    "cantidad":number,
    "cliente": Cliente,
    "estado":false
}