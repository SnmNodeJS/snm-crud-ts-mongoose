import {Router, Request, Response, NextFunction} from 'express';
import UsersController from '../controllers/users';
const router = Router();

router.post('/', UsersController.createUser);
router.get('/:id', UsersController.getUser);
router.get('/', UsersController.getUsers);
router.patch('/:id', UsersController.updateUser);
router.delete('/:id', UsersController.deleteUser);
export default router;