import { Router } from 'express';
import allController from '../controllers/missing-routes-controller.js';

const router = Router();

router.all('*', allController);

export default router;