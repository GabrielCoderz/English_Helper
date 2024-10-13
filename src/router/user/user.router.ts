import { Router } from 'express';
import { CreateUserController } from '../../controller/user/CreateUserController';
import { AuthUserController } from '../../controller/user/AuthUserController';
import { isAuthenticated } from '../../middleware/auth.user';
import { DetailUserController } from '../../controller/user/DetailUserController';
import { UpdateUserController } from '../../controller/user/UpdateUserController';

const router = Router()

router.post('/', new CreateUserController().handle);
router.post('/session', new AuthUserController().handle);
router.post('/me', isAuthenticated, new DetailUserController().handle);
router.put('/', isAuthenticated, new UpdateUserController().handle);


export default router