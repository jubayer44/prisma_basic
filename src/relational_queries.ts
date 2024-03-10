import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const relationalQueries = async () => {
  //// Fluent API (1 ta table er information diye onno akta table er data find kora)
  //   const result = await prisma.user
  //     .findUnique({
  //       where: {
  //         id: 1,
  //       },
  //     })
  //     .post();

  //// Include other table
  //   const result = await prisma.user.findUnique({
  //     where: {
  //       id: 1,
  //     },
  //     include: {
  //       post: true,
  //       profile: true,
  //     },
  //   });

  //// Relational Filter

  const publishedPostsUser = await prisma.user.findMany({
    include: {
      post: {
        where: {
          published: true,
        },
      },
    },
  });
  console.dir(publishedPostsUser, { depth: Infinity });
};

relationalQueries();
