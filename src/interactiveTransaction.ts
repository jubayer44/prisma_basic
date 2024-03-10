import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const interactiveTransaction = async () => {
  const result = await prisma.$transaction(async (tClient) => {
    // query 1
    const findAllUser = await tClient.user.findMany();
    // query 2
    const findAllPost = await tClient.post.count();
    // query 3
    const updateUser = await tClient.user.update({
      where: {
        id: 2,
      },
      data: {
        age: 45,
      },
    });
    return {
      findAllUser,
      findAllPost,
      updateUser,
    };
  });
  console.log(result);
};

interactiveTransaction();
