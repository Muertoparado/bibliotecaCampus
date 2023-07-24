# endpoinst 
El presente proyecto se realiza para la optimizacion de una biblioteca, en estos endpoints basmos la utilidad de herramientas de la plataforma, para la carga de datos se conserva el siguiente formato 
### app2.post(/{nombre de la tabla/add


***endpoints utilidades***

### app.get('/autor/nac' 
Obtener todos los autores y su nacionalidad.
---
### app.get('/categorias'
Listar todas las categorías disponibles
---
### app.get('/editoriales'
Mostrar todas las editoriales y sus direcciones.
---
### app.get('/libros/descripcion'
Obtener los estados de los libros y sus descripciones.
---
### app.get('/libros'
Mostrar todos los libros con su título, autor y editorial
Listar los préstamos realizados con fecha de préstamo,
fecha de devolución y estado
---
### app.get('/reservas'
Obtener todas las reservas realizadas con su fecha de
reserva y estado
---

### app.get('/librosdisponibles
Mostrar los libros disponibles para préstamo con su título y
autor
---
### app.get('/librosprestados'
Obtener los libros prestados y su fecha de devolución.
---
### app.get('/usuarios/correos'
Listar los usuarios y sus correos electrónicos.
---
### app.get('/libros/:autor'
.Mostrar los libros escritos por un autor específico (ejemplo:
Gabriel García
---
### app.get('/categoria/:cat'
Obtener los libros de cierta categoría (ejemplo: Novela).
---

 ***Nota***
Por favor, asegúrate de que el servidor y la base de datos estén configurados correctamente antes de realizar las pruebas con estos endpoints. También es importante tener en cuenta que los tokens JWT generados con el endpoint GET {server}/app/ y el /app2 tienen una vigencia de 1 hora.