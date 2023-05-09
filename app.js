//Declaraciones
const express = require("express");//servidor
const hbs  = require('hbs'); //HTML- Dinamicos
const bodyParser = require('body-parser'); //body-post
const port = process.env.port || 3000; //puerto de ejecucion

const app = express();
//motor para generar las vistas dinamicas
app.set('view engine', 'hbs');
//por ejemplo para el header,menu vertical, pie de pagina
hbs.registerPartials(__dirname + '/view/partials',()=>{})

//use- middleware
app.use(express.static('public')); //parte publica de la app
app.use(bodyParser.urlencoded({extended : true})) //procesar el body-parser
app.use(bodyParser.json()) //Manejar datos en el formato json

//procesar solicitudes del tipo GET y POST en los navegadores
//tipo post el dashboard
//tipo get 404
//app.get('/menu', (req,res)=>{
  //  res.render('menu')
//})
app.get('/productos', (req,res)=>{
    res.render('productos')
})
app.get('*',(req,res)=>{
    res.render('404');
})

app.listen(port,()=>{
    console.log('Servidor express corriendo en el puerto: ', port);
})