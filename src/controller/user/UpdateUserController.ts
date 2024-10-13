import { Request, Response } from "express";
import { UpdateUserService } from "../../service/user/UpdateUserService";

class UpdateUserController {
    async handle(request: Request, response: Response) {
        const { name } = request.body;
        const user_id = request.user_id;

        const updateUser = new UpdateUserService();

        const user = await updateUser.execute({
            user_id,
            name
        })

        response.json(user);
    }
}

export { UpdateUserController }