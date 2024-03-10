import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  // Get all data
  const allData = await prisma.post.findMany();

  //// Find first Match
  const findFast = await prisma.post.findFirst({
    where: {
      published: false,
    },
  });

  //// Find first Match or throw error
  // const findFastOrThrow = await prisma.post.findFirstOrThrow({
  //   where: {
  //     published: true,
  //   },
  // });

  // Find Unique (Apply only unique field)
  const findUnique = await prisma.post.findUniqueOrThrow({
    where: {
      id: 1,
    },
    select: {
      title: true,
      content: true,
    },
  });
  console.log(findUnique);
};

main();
