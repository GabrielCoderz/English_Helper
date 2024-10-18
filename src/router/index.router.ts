import { Router } from 'express';
import userRouter from './user/user.router';  // Importa as rotas de usuário
import transcriptRouter from './transcript/transcript.router'; 

const router = Router();

// Define a rota de usuários como parte do roteamento principal
router.use('/users', userRouter);
router.use('/transcript', transcriptRouter);

export default router ;