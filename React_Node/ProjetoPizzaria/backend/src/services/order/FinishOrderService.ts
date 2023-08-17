import prismaClient from "../../prisma";

interface OrderRequest {
  orderId: string;
}

export default class FinishOrderService {
  async execute({ orderId }: OrderRequest) {
    const order = await prismaClient.order.update({
      where: {
        id: orderId,
      },
      data: {
        status: true,
      },
    });

    return order;
  }
}
