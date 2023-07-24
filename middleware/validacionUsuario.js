import express from 'express';
import 'reflect-metadata';
import {plainToClass} from 'class-transformer';
import {usuario} from '../controller/usuario.js'
import { validate } from 'class-validator';

const validacionUsuario = express();
validacionUsuario.use(async (req,res,next)=>{
    try {
        let data = plainToClass(usuario, req.body, {excludeExtraneousValues: true});
        req.body = JSON.parse(JSON.stringify(data));
        await validate(data);
        next();
    } catch (error) {
        res.status(error.status).send(error);
    }
})

export default validacionUsuario;