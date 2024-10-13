import { Router } from 'express';
import { CreateUserController } from '../../controller/user/CreateUserController';
import { AuthUserController } from '../../controller/user/AuthUserController';

const router = Router()

router.post('/', new CreateUserController().handle);
router.post('/session', new AuthUserController().handle);


export default router