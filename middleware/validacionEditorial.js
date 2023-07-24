import express from 'express';
import 'reflect-metadata';
import {plainToClass} from 'class-transformer';
import {editorial} from '../controller/editorial.js'
import { validate } from 'class-validator';

const validacionEditorial = express();
validacionEditorial.use(async (req,res,next)=>{
    try {
        let data = plainToClass(editorial, req.body, {excludeExtraneousValues: true});
        req.body = JSON.parse(JSON.stringify(data));
        await validate(data);
        next();
    } catch (error) {
        res.status(error.status).send(error);
    }
})

export default validacionEditorial;