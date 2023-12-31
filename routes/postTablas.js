import {Router} from 'express';
import { SignJWT, jwtVerify } from "jose";
import validacionCategoria from '../middleware/validacionCategoria.js'
import mysql from 'mysql2';
import validacionEditorial from '../middleware/validacionEditorial.js';
import validacionEstado from '../middleware/validacionEstado.js';
import validacionAutor from '../middleware/validacionAutor.js';
import validacionUsuario from '../middleware/validacionUsuario.js';
import validacionReserva from '../middleware/validacionReserva.js';

let con= undefined;
const app2 = Router();

app2.use((req, res, next)=>{
    let myConfig=JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(myConfig);
    next();
});
app2.get("/", async (req,res)=>{
    let json=JSON.stringify(req.body)

    const encoder = new TextEncoder();
    const jwtconstructor = new SignJWT({json});
    
    const jwt = await jwtconstructor
    .setProtectedHeader({alg:"HS256",typ:"JWT"})
    .setIssuedAt()
    .setExpirationTime("1h")
    .sign(encoder.encode(process.env.JWT_PRIVATE_KEY));
    res.cookie('data',jwt,{httpOnly: true});
    console.log(`data: ${jwt}`);
    res.send(({jwt}));
});

app2.post('/categoria/add', validacionCategoria, async(req,res)=>{
    const { authorization } = req.headers;
    if (!authorization) return res.status(401).send({ message: "Unauthorized :(" });
    try {
        const encoder = new TextEncoder();
        const jwtData = await jwtVerify(
        authorization,
        encoder.encode(process.env.JWT_PRIVATE_KEY)
    );

    const {id_categoria,nombre}=req.body
    const datos={id_categoria,nombre};
    console.log(datos);
    con.query(/*sql */ `INSERT INTO categoria SET ?`,[datos], (err,data,fil)=>{
        if (err) {
            console.error("Error al ejecutar la consulta de inserción: ", err);
            res.status(500).send("Error al ejecutar la consulta de inserción");
            return;
        }

    console.log("post categoria");
    res.send(JSON.stringify(data));
    console.log(data);
    })
} catch (error) {
    res.status(401).send({ message: "Token authentication failed :(" });
} 
    
});


app2.post('/editorial/add', validacionEditorial, async(req,res)=>{
    const { authorization } = req.headers;
    if (!authorization) return res.status(401).send({ message: "Unauthorized :(" });
    try {
        const encoder = new TextEncoder();
        const jwtData = await jwtVerify(
        authorization,
        encoder.encode(process.env.JWT_PRIVATE_KEY)
    );

    const {id_editorial, nombre, direccion, telefono}=req.body
    const datos={id_editorial, nombre, direccion, telefono};
    console.log(datos);
    con.query(/*sql */ `INSERT INTO editorial SET ?`,[datos], (err,data,fil)=>{
        if (err) {
            console.error("Error al ejecutar la consulta de inserción: ", err);
            res.status(500).send("Error al ejecutar la consulta de inserción");
            return;
        }

    console.log("post editorial");
    res.send(JSON.stringify(data));
    console.log(data);
    })
} catch (error) {
    res.status(401).send({ message: "Token authentication failed :(" });
} 
    
});

app2.post('/estado/add', validacionEstado, async(req,res)=>{
    const { authorization } = req.headers;
    if (!authorization) return res.status(401).send({ message: "Unauthorized :(" });
    try {
        const encoder = new TextEncoder();
        const jwtData = await jwtVerify(
        authorization,
        encoder.encode(process.env.JWT_PRIVATE_KEY)
    );

    const {id_estado, nombre, descripcion}=req.body
    const datos={id_estado, nombre, descripcion};
    console.log(datos);
    con.query(/*sql */ `INSERT INTO estado_libro SET ?`,[datos], (err,data,fil)=>{
        if (err) {
            console.error("Error al ejecutar la consulta de inserción: ", err);
            res.status(500).send("Error al ejecutar la consulta de inserción");
            return;
        }

    console.log("post estado libro");
    res.send(JSON.stringify(data));
    console.log(data);
    })
} catch (error) {
    res.status(401).send({ message: "Token authentication failed :(" });
} 
    
});

app2.post('/autor/add', validacionAutor, async(req,res)=>{
    const { authorization } = req.headers;
    if (!authorization) return res.status(401).send({ message: "Unauthorized :(" });
    try {
        const encoder = new TextEncoder();
        const jwtData = await jwtVerify(
        authorization,
        encoder.encode(process.env.JWT_PRIVATE_KEY)
    );

    const {id_autor, nombre, apellido, nacionalidad}=req.body
    const datos={id_autor, nombre, apellido, nacionalidad};
    console.log(datos);
    con.query(/*sql */ `INSERT INTO autor SET ?`,[datos], (err,data,fil)=>{
        if (err) {
            console.error("Error al ejecutar la consulta de inserción: ", err);
            res.status(500).send("Error al ejecutar la consulta de inserción");
            return;
        }

    console.log("post autor");
    res.send(JSON.stringify(data));
    console.log(data);
    })
} catch (error) {
    res.status(401).send({ message: "Token authentication failed :(" });
} 
    
});

app2.post('/usuario/add', validacionUsuario, async(req,res)=>{
    const { authorization } = req.headers;
    if (!authorization) return res.status(401).send({ message: "Unauthorized :(" });
    try {
        const encoder = new TextEncoder();
        const jwtData = await jwtVerify(
        authorization,
        encoder.encode(process.env.JWT_PRIVATE_KEY)
    );

    const {id_usuario, nombre, apellido, direccion, telefono, email}=req.body
    const datos={id_usuario, nombre, apellido, direccion, telefono, email};
    console.log(datos);
    con.query(/*sql */ `INSERT INTO usuario SET ?`,[datos], (err,data,fil)=>{
        if (err) {
            console.error("Error al ejecutar la consulta de inserción: ", err);
            res.status(500).send("Error al ejecutar la consulta de inserción");
            return;
        }

    console.log("post autor");
    res.send(JSON.stringify(data));
    console.log(data);
    })
} catch (error) {
    res.status(401).send({ message: "Token authentication failed :(" });
} 
    
});

app2.post('/reservas/add', validacionReserva, async(req,res)=>{
    const { authorization } = req.headers;
    if (!authorization) return res.status(401).send({ message: "Unauthorized :(" });
    try {
        const encoder = new TextEncoder();
        const jwtData = await jwtVerify(
        authorization,
        encoder.encode(process.env.JWT_PRIVATE_KEY)
    );

    const {id_reserva, id_usuario, id_libro, fecha_reserva, fecha_reserva_fin, estado}=req.body
    const datos={id_reserva, id_usuario, id_libro, fecha_reserva, fecha_reserva_fin, estado};
    console.log(datos);
    con.query(/*sql */ `INSERT INTO reserva SET ?`,[datos], (err,data,fil)=>{
        if (err) {
            console.error("Error al ejecutar la consulta de inserción: ", err);
            res.status(500).send("Error al ejecutar la consulta de inserción");
            return;
        }

    console.log("post autor");
    res.send(JSON.stringify(data));
    console.log(data);
    })
} catch (error) {
    res.status(401).send({ message: "Token authentication failed :(" });
} 
    
});

export default app2;