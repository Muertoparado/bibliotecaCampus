import express from 'express';
import 'reflect-metadata';
import {plainToClass} from 'class-transformer';
import {categoria} from '../controller/categoria.js'
import { validate } from 'class-validator';

const validacionCategoria = express();
validacionCategoria.use(async (req,res,next)=>{
    try {
        let data = plainToClass(categoria, req.body, {excludeExtraneousValues: true});
        req.body = JSON.parse(JSON.stringify(data));
        await validate(data);
        next();
    } catch (error) {
        res.status(error.status).send(error);
    }
})

export default validacionCategoria;