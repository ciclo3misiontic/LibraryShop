require("dotenv").config()

const express = require ("express");
const cors = require ("cors");
const mongoose = require ("mongoose");

const port = process.env.PORT;


const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api', require('./routes/routes'));

mongoose.connect(process.env.URI_DB)
.then(() => {console.log("Se ha establecido conexion con base de datos!")})
.catch(err => console.console.error(err));

app.listen(port, () => {
    console.log( ` Servidor escuchando a traves de http://localhost:${port}`);
})