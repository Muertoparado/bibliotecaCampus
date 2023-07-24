import express from 'express';
import 'reflect-metadata';
import {plainToClass} from 'class-transformer';
import {reserva} from '../controller/reserva.js'
import { validate } from 'class-validator';

const validacionReserva = express();
validacionReserva.use(async (req,res,next)=>{
    try {
        let data = plainToClass(reserva, req.body, {excludeExtraneousValues: true});
        req.body = JSON.parse(JSON.stringify(data));
        await validate(data);
        next();
    } catch (error) {
        res.status(error.status).send(error);
    }
})

export default validacionReserva;