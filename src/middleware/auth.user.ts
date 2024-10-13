import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface Payload {
    sub: string;
}

export function isAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction,
) {
    const authToken = request.headers.authorization;

    if(!authToken) {
        response.status(401);

        throw new Error('Não autorizado')
    }

    const token = authToken.split(" ")[1];

    try {
        const { sub } = verify(
            token,
            process.env.JWT_SECRET,
        ) as Payload;

        request.user_id = sub;

        next();
    } catch(err) {
        response.status(401).end()
    }
}