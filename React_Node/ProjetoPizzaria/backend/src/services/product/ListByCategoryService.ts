import prismaClient from "../../prisma";

interface ProductRequest {
  categoryId: string;
}

export default class ListByCategoryService {
  async execute({ categoryId }: ProductRequest) {
    const findByCategory = await prismaClient.product.findMany({
      where: {
        categoryId: categoryId,
      },
    });

    return findByCategory;
  }
}
