// clase con inyeccion de dependencias
// express
import { Request, Response } from "express";

export class AuthController {
    // dependency inyenction
    constructor() {}

    // metodos

    // register
    registerUser = ( req: Request , res: Response ) => {
        // respuesta
        res.json('registerUser');
    }
    // login
    loginUser = ( req: Request , res: Response ) => {
        // respuesta
        res.json('loginUser');
    }
    // validate email
    validateEmail = ( req: Request , res: Response ) => {
        // respuesta
        res.json('validationEmail');
    }

}