import prismaClient from "../../prisma";

interface DetailRequest {
  orderId: string;
}

export default class DetailOrderSerivce {
  async execute({ orderId }: DetailRequest) {
    const orders = await prismaClient.item.findMany({
      where: {
        orderId: orderId,
      },
      include: {
        Product: true,
        Order: true,
      },
    });

    return orders;
  }
}
