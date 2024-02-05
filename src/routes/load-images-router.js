import { postImageController } from '../controllers/load-images-controller.js';
import upload from '../middlewares/multer-middleware.js';

import { Router } from 'express';

const loadImageRouter = Router();

loadImageRouter.post('/', upload, postImageController);

export default loadImageRouter;