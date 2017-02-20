const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

//cableando la base de datos.
mongoose.connect(config.database);

// Verificando conexion.
mongoose.connection.on('connected', () => {
    console.log('Conected to database '  + config.database);
})

// Error.
mongoose.connection.on('error', (err) => {
    console.log('Conected to database '  + err);
})

//inicializacion de la aplicacion.
const app = express();

const users = require('./routes/users');

//puerto.
const port = 3000;

//generando cors.
app.use(cors());

//configuracion de directorio de archivos estaticos. Angular 2.
app.use(express.static(path.join(__dirname, 'public')));

//middleware BodyParser.
app.use(bodyParser.json());

//Passport middleware.
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

app.use('/users', users);

// ruta a la pagina principal.
app.get('/', (req, res) => {
    res.send('Invalid Endpoint :(');
})

//servidor inicializado.
app.listen(port, () => {
    console.log('Server started on port ' + port);
})
