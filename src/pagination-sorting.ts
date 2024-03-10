import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const paginationSorting = async () => {
  // offset pagination
  const offSetPaginate = await prisma.post.findMany({
    skip: 2,
    take: 2,
  });

  //   console.log(offSetPaginate);

  //  cursor pagination
  const cursorPagination = await prisma.post.findMany({
    skip: 2,
    take: 2,
    cursor: {
      id: 2,
    },
  });

  //   console.log(cursorPagination);

  // Sorting

  const sortedData = await prisma.post.findMany({
    orderBy: {
      id: "asc",
    },
    skip: 1,
    take: 2,
    cursor: {
      id: 2,
    },
  });
  console.log(sortedData);
};

paginationSorting();
