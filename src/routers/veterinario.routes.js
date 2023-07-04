import {Router} from 'express'
import verificarAutenticacion from '../middlewares/autentication.js';
const router = Router()
import{
    login,
    perfil,
    registro,
    confirmEmail,
    listarVeterinarios,
    detalleVeterinario,
    actualizarPerfil,
    actualizarPassword,
    recuperarPassword,
    comprobarTokenPasword,
    nuevoPassword,
} from "../controllers/veterinario.controller.js";

/* -------------- Rutas Publicas ---------------------- */
router.post("/login", login);
router.post("/registro", registro);
router.get("/confirmar/:token", confirmEmail);
router.get("/veterinarios", listarVeterinarios);
router.get("/recuperar-password", recuperarPassword);
router.get("/recuperar-password/:token", comprobarTokenPasword);
router.post("/nuevo-password/:token", nuevoPassword);

/* -------------- Rutas Privadas ---------------------- */
router.get("/perfil", verificarAutenticacion, perfil);
router.put('/veterinario/actualizarpassword', verificarAutenticacion, actualizarPassword)
router.get("/veterinario/:id", verificarAutenticacion, detalleVeterinario);
router.put("/veterinario/:id", verificarAutenticacion, actualizarPerfil);


export default router