import { Router } from 'express';
import userRouter from './user/user.router';  // Importa as rotas de usuário

const router = Router();

// Define a rota de usuários como parte do roteamento principal
router.use('/users', userRouter);

export default router ;