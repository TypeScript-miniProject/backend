import {Router} from 'express';
import todoList from './post';

const router = Router();

router.use('/post',todoList);

export default router;
