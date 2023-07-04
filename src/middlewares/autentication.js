import jwt from 'jsonwebtoken'
import Veterinario from '../models/Veterinario.js'


const verificarAutenticacion = async (req,res,next)=>{
// Validacion del JWT
// Obtiene el token proveniente de JWT
if(!req.headers.authorization) return res.status(404).json({msg:"Lo sentimos, debes proprocionar un token"}) 
// Obtiene el JWT    
    const {authorization} = req.headers
    try {
        // Obtiene solo el header del token y vrificaicon del mismo
        const {id} = jwt.verify(authorization.split(' ')[1],process.env.JWT_SECRET)
        // Obtener el usuario en Base al ID
        req.veterinarioBDD = await Veterinario.findById(id).lean().select("-password")
        next()
    } catch (error) {
        // Error
        const e = new Error("Formato del token no válido")
        return res.status(404).json({msg:e.message})
    }
}

export default verificarAutenticacion