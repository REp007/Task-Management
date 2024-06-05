import {
    getTaks,
    createTask,
    updateTask,
    deleteTask
} from '@/controllers/TaskController';
import authenticate from '@/middleware/authenticate';

import { Router } from 'express';

const router = Router();

router.use(authenticate);

router.get('/', getTaks);
router.post('/', createTask);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);

export default router;