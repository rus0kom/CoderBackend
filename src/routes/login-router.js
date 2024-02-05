import { Router } from 'express';
import passport from "passport";

import { postLoginController } from '../controllers/login-controller.js';

const loginRouter = Router();

loginRouter.post('/', passport.authenticate('login'), postLoginController);

export default loginRouter;