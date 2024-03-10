import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const groupBy = async () => {
  const result = await prisma.post.groupBy({
    by: ["published"],
    _count: {
      title: true,
    },
    having: {
      authorId: {
        _sum: {
          gt: 3,
        },
      },
    },
  });
  console.log(result);
};

groupBy();
