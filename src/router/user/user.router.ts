import { Router } from 'express';
import { CreateUserController } from '../../controller/user/CreateUserController';

const router = Router()

router.post('/', new CreateUserController().handle);


export { router }