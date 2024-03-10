import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const deleteData = () => {
  const singleDelete = prisma.post.delete({
    where: {
      id: 1,
    },
  });

  const deleteMany = prisma.post.deleteMany({
    where: {
      published: false,
    },
  });
};

deleteData();
