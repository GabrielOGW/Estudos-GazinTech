import { Request, Response } from "express";
import DetailUserService from "../../services/users/DetailUserService";

export default class DetailUserController {
  async handle(req: Request, res: Response) {
    const detailUserService = new DetailUserService();
    const user = await detailUserService.execute();

    return res.json(user);
  }
}
