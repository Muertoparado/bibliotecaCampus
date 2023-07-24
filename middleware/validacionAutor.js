import express from 'express';
import 'reflect-metadata';
import {plainToClass} from 'class-transformer';
import {autor} from '../controller/autor.js'
import { validate } from 'class-validator';

const validacionAutor = express();
validacionAutor.use(async (req,res,next)=>{
    try {
        let data = plainToClass(autor, req.body, {excludeExtraneousValues: true});
        req.body = JSON.parse(JSON.stringify(data));
        await validate(data);
        next();
    } catch (error) {
        res.status(error.status).send(error);
    }
})

export default validacionAutor;