import express, { json } from 'express';
import { createConnection } from 'mysql';
import { ARTICULOS } from './src/routes/articles';
import { ARTICULOS_ID } from './src/routes/articles';

const cors = require('cors')

//Creando objeto para poder acceder a todo los metodos y propiedades de express
const app = express();

// ! MIDDLEWARE
// ! Middleware es una funcion que se ejecuta antes de que se ejecute el codigo de la ruta

//Especificamos que usaremos el tipo de dato JSON
app.use(json())
app.use(cors())



//Connecting to database
const conexion =  createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'articulosdb'
});

//Probando conexion
conexion.connect((error) => {
    if(error) {
        throw error;
    }else{
    console.log('Connected succesfully to database!!');
    }
});

app.get('/', (req, res) => {
    res.send('Welcome');
});

//Obteniendo todos los articulos de la base de datos
app.get(`${ARTICULOS}`, (req, res) => {
    conexion.query('SELECT * FROM articulos', (error, rows) => {
        if(error) {
            throw error;
        }else{
            res.send(rows);
        }
    });
});

//Obteniendo solo un articulo de la base de datos
app.get(`${ARTICULOS_ID}`, (req, res) => {
    conexion.query('SELECT * FROM articulos WHERE id = ?', [req.params.id], (error, rows) => {
        if(error) {
            throw error;
        }else{
            res.send(rows);
        }
    });
});

//Insertando un nuevo articulo en la base de datos
app.post( `${ARTICULOS}`, (req, res) =>  {
    let data = {description:req.body.description, price:req.body.price, stock:req.body.stock};
    let sql = "INSERT INTO articulos SET ?";
    conexion.query(sql, data, (error, results)=>{
        if(error) {
            throw error;
        }else{
            Object.assign(data, {id:results.insertId});
            res.send(results);
        }
    });
}); 




//Editando un articulo de la base de datos
app.put(`${ARTICULOS_ID}`, (req, res) => {
    let id = Number(req.params.id);
    let description = req.body.description;
    let price =req.body.price;
    let stock = req.body.stock;
    let sql = `UPDATE articulos SET '${description}' WHERE id = ${id}`;
    conexion.query(sql,(error, results) => {
        if(error) {
            throw error;
        }else{
            res.send(results);
        }
    });
});


//Eliminando un articulo de la base de datos
app.delete(`${ARTICULOS_ID}`, (req, res) => {
    let id = req.params.id;
    let sql = "DELETE FROM articulos WHERE id = ?";
    conexion.query(sql, [id], (error, results) => {
        if(error) {
            throw error;
        }else{
            res.send(results);
        }
    });
});

//Si el puerto esta ocupado usa el siguiente
const puerto = process.env.PORT || 3000;

//Iniciando el servidor
app.listen(puerto, () => {
    console.log(`Servidor corriendo en el puerto ${puerto}`);
});
