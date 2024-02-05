import { Router } from 'express';

import { getUsersController, postUsersController  } from '../controllers/users-controller.js';

const usersRouter = Router();

usersRouter.get('/', getUsersController);
usersRouter.post('/', postUsersController);

export default usersRouter;