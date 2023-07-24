import express from 'express';
import 'reflect-metadata';
import {plainToClass} from 'class-transformer';
import {estado_libro} from '../controller/estado_libro.js'
import { validate } from 'class-validator';

const validacionEstado = express();
validacionEstado.use(async (req,res,next)=>{
    try {
        let data = plainToClass(estado_libro, req.body, {excludeExtraneousValues: true});
        req.body = JSON.parse(JSON.stringify(data));
        await validate(data);
        next();
    } catch (error) {
        res.status(error.status).send(error);
    }
})

export default validacionEstado;