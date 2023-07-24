import {Router} from 'express';
import { SignJWT, jwtVerify } from "jose";
import mysql from 'mysql2';

let con= undefined;
const app = Router();


app.use((req, res, next)=>{
    let myConfig=JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(myConfig);
    next();
});
app.get("/", async (req,res)=>{
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


app.get('/autor/nac', async(req, res) => {
    const { authorization } = req.headers;
    if (!authorization) return res.status(401).send({ message: "Unauthorized :(" });

    try {
        const encoder = new TextEncoder();
        const jwtData = await jwtVerify(
        authorization,
        encoder.encode(process.env.JWT_PRIVATE_KEY)
    );
    console.log(jwtData);
  
    con.query(/*sql */ `SELECT a.nombre, a.nacionalidad FROM autor AS a`, (err,data,fil)=>{
        if (err) {
            console.error("Error al ejecutar la consulta", err);
            res.status(500).send("Error al ejecutar la consulta");
            return;
        }

    console.log("GET autores y su nacionalidad");
    res.send(JSON.stringify(data));
    console.log(data);
})  
}catch (error) {
    res.status(401).send({ message: "Token authentication failed :(" });
}
});


app.get('/categorias', async(req, res) => {
    const { authorization } = req.headers;
    if (!authorization) return res.status(401).send({ message: "Unauthorized :(" });

    try {
        const encoder = new TextEncoder();
        const jwtData = await jwtVerify(
        authorization,
        encoder.encode(process.env.JWT_PRIVATE_KEY)
    );
    console.log(jwtData);
  
    con.query(/*sql */ `SELECT * FROM categoria`, (err,data,fil)=>{
        if (err) {
            console.error("Error al ejecutar la consulta de inserción: ", err);
            res.status(500).send("Error al ejecutar la consulta de inserción");
            return;
        }

    console.log("GET categoria");
    res.send(JSON.stringify(data));
    console.log(data);
})  
}catch (error) {
    res.status(401).send({ message: "Token authentication failed :(" });
}
});

app.get('/editoriales', async(req, res) => {
    const { authorization } = req.headers;
    if (!authorization) return res.status(401).send({ message: "Unauthorized :(" });

    try {
        const encoder = new TextEncoder();
        const jwtData = await jwtVerify(
        authorization,
        encoder.encode(process.env.JWT_PRIVATE_KEY)
    );
    console.log(jwtData);
  
    con.query(/*sql */ `SELECT e.id_editorial, e.nombre, e.direccion FROM editorial AS e`, (err,data,fil)=>{
        if (err) {
            console.error("Error al ejecutar la consulta", err);
            res.status(500).send("Error al ejecutar la consulta");
            return;
        }

    console.log("GET editorial");
    res.send(JSON.stringify(data));
    console.log(data);
})  
}catch (error) {
    res.status(401).send({ message: "Token authentication failed :(" });
}
});

app.get('/libros/descripcion', async(req, res) => {
    const { authorization } = req.headers;
    if (!authorization) return res.status(401).send({ message: "Unauthorized :(" });

    try {
        const encoder = new TextEncoder();
        const jwtData = await jwtVerify(
        authorization,
        encoder.encode(process.env.JWT_PRIVATE_KEY)
    );
    console.log(jwtData);
  
    con.query(/*sql */ `SELECT l.titulo, l.id_estado, l.isbn FROM libro AS l`, (err,data,fil)=>{
        if (err) {
            console.error("Error al ejecutar la consulta", err);
            res.status(500).send("Error al ejecutar la consulta");
            return;
        }

    console.log("GET editorial");
    res.send(JSON.stringify(data));
    console.log(data);
})  
}catch (error) {
    res.status(401).send({ message: "Token authentication failed :(" });
}
});


app.get('/libros', async(req, res) => {
    const { authorization } = req.headers;
    if (!authorization) return res.status(401).send({ message: "Unauthorized :(" });

    try {
        const encoder = new TextEncoder();
        const jwtData = await jwtVerify(
        authorization,
        encoder.encode(process.env.JWT_PRIVATE_KEY)
    );
    console.log(jwtData);
  
    con.query(/*sql */ `SELECT l.titulo, e.nombre, a.nombre FROM libro AS l
    INNER JOIN autor AS a ON a.id_autor
    INNER JOIN editorial AS e ON e.id_editorial`, (err,data,fil)=>{
        if (err) {
            console.error("Error al ejecutar la consulta", err);
            res.status(500).send("Error al ejecutar la consulta");
            return;
        }

    console.log("GET libros");
    res.send(JSON.stringify(data));
    console.log(data);
})  
}catch (error) {
    res.status(401).send({ message: "Token authentication failed :(" });
}
});
app.get('/reservas', async(req, res) => {
    const { authorization } = req.headers;
    if (!authorization) return res.status(401).send({ message: "Unauthorized :(" });

    try {
        const encoder = new TextEncoder();
        const jwtData = await jwtVerify(
        authorization,
        encoder.encode(process.env.JWT_PRIVATE_KEY)
    );
    console.log(jwtData);
  
    con.query(/*sql */ `SELECT * FROM reserva
    `, (err,data,fil)=>{
        if (err) {
            console.error("Error al ejecutar la consulta", err);
            res.status(500).send("Error al ejecutar la consulta");
            return;
        }

    console.log("GET reservas");
    res.send(JSON.stringify(data));
    console.log(data);
})  
}catch (error) {
    res.status(401).send({ message: "Token authentication failed :(" });
}
});

app.get('/librosdisponibles', async(req, res) => {
    const { authorization } = req.headers;
    if (!authorization) return res.status(401).send({ message: "Unauthorized :(" });

    try {
        const encoder = new TextEncoder();
        const jwtData = await jwtVerify(
        authorization,
        encoder.encode(process.env.JWT_PRIVATE_KEY)
    );
    console.log(jwtData);
  
    con.query(/*sql */ `SELECT * FROM libro WHERE id_estado=1
    `, (err,data,fil)=>{
        if (err) {
            console.error("Error al ejecutar la consulta", err);
            res.status(500).send("Error al ejecutar la consulta");
            return;
        }

    console.log("GET reservas");
    res.send(JSON.stringify(data));
    console.log(data);
})  
}catch (error) {
    res.status(401).send({ message: "Token authentication failed :(" });
}
});

app.get('/librosprestados', async(req, res) => {
    const { authorization } = req.headers;
    if (!authorization) return res.status(401).send({ message: "Unauthorized :(" });

    try {
        const encoder = new TextEncoder();
        const jwtData = await jwtVerify(
        authorization,
        encoder.encode(process.env.JWT_PRIVATE_KEY)
    );
    console.log(jwtData);
  
    con.query(/*sql */ `SELECT a.nombre, p.fecha_devolucion FROM prestamo AS p
    INNER JOIN autor AS a ON p.id_usuario
    `, (err,data,fil)=>{
        if (err) {
            console.error("Error al ejecutar la consulta", err);
            res.status(500).send("Error al ejecutar la consulta");
            return;
        }

    console.log("GET libros prestados");
    res.send(JSON.stringify(data));
    console.log(data);
})  
}catch (error) {
    res.status(401).send({ message: "Token authentication failed :(" });
}
});


app.get('/usuarios/correos', async(req, res) => {
    const { authorization } = req.headers;
    if (!authorization) return res.status(401).send({ message: "Unauthorized :(" });

    try {
        const encoder = new TextEncoder();
        const jwtData = await jwtVerify(
        authorization,
        encoder.encode(process.env.JWT_PRIVATE_KEY)
    );
    console.log(jwtData);
  
    con.query(/*sql */ `SELECT u.nombre, u.email FROM usuario AS u
    `, (err,data,fil)=>{
        if (err) {
            console.error("Error al ejecutar la consulta", err);
            res.status(500).send("Error al ejecutar la consulta");
            return;
        }

    console.log("GET usuarios correos");
    res.send(JSON.stringify(data));
    console.log(data);
})  
}catch (error) {
    res.status(401).send({ message: "Token authentication failed :(" });
}
});

app.get('/libros/:autor', async(req, res) => {
    const { autor } = req.params;
    const { authorization } = req.headers;
    if (!authorization) return res.status(401).send({ message: "Unauthorized :(" });

    try {
        const encoder = new TextEncoder();
        const jwtData = await jwtVerify(
        authorization,
        encoder.encode(process.env.JWT_PRIVATE_KEY)
    );
    console.log(jwtData);
  
    con.query(/*sql */ `SELECT * FROM autor WHERE nombre=?
    `,[autor], (err,data,fil)=>{
        if (err) {
            console.error("Error al ejecutar la consulta", err);
            res.status(500).send("Error al ejecutar la consulta");
            return;
        }

    console.log("GET libros autor especifico nombre");
    res.send(JSON.stringify(data));
    console.log(data);
})  
}catch (error) {
    res.status(401).send({ message: "Token authentication failed :(" });
}
});


export default app;