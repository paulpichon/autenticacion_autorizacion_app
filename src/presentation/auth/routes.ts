// router express
import { Router } from 'express';
// AuthController
import { AuthController } from './controller';

// clase
export class AuthRoutes {


  static get routes(): Router {
    // router express
    const router = Router();
    // instancia del controlador
    const controller = new AuthController();
    
    // Definir las rutas
    router.post('/login', controller.loginUser );
    router.post('/register', controller.registerUser );
    router.get('/validate-email/:token', controller.validateEmail );



    return router;
  }


}

