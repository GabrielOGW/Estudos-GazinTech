import { Request, Response } from "express";
import DetailOrderSerivce from "../../services/order/DetailOrderSerivce";

export default class DetailOrderController {
  async handle(req: Request, res: Response) {
    const orderId = req.query.orderId as string;

    const detailOrderService = new DetailOrderSerivce();

    const orders = await detailOrderService.execute({
      orderId,
    });

    return res.json(orders);
  }
}
