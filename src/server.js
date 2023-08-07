// Type module
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import routerVeterinario from './routers/veterinario.routes.js'
import routerPacientes from './routers/paciente.routes.js'

/* ----------Inicializacion---------- */
// de express por medio de una variable
const app = express()
dotenv.config()

/* -----------Configuraciones------- */
app.set('port', process.env.port || 3003)
app.use(cors())

/* -----------Middlewares-------- */
// se habilita esta funcion debdio a que se manejan envios de JSON
app.use(express.json())
app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : './uploads'
}));
/* -----------Variables Globales-------- */


/* -----------Rutas--------------- */
app.get('/', (req, res) =>{
    res.send('Funciona!!!')
})
app.use('/api', routerVeterinario) //Inicializa con un previjo previo
app.use('/api', routerPacientes)
// Manejo de una ruta que no sea encontrada
app.use((req,res)=>res.status(404).send("Endpoint no encontrado - 404"))


// Exportacion por default
export default app