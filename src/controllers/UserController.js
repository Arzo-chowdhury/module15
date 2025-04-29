import { createUserService } from "../service/UserService.js";
//creat user
export const createUserController = async (req, res) => {
    let result = createUserService(req,res);
    return res.status(200).json(result);
}