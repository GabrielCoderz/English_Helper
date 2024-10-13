import express, { Request, Response, NextFunction } from "express";
import 'express-async-errors';
import cors from "cors";
import { router } from './router/user/user.router';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);
app.use(cors());

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if(err instanceof Error) {
        res.status(400).json({
            error: err.message
        })
    }

    res.status(500).json({
        status: 'error',
        message: 'Internal server error.'
    })
})

app.listen(3000, () => {
    console.log('Server running on port 3000')
})