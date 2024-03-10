import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const filtering = async () => {
  //// AND filtering
  const andFiltering = await prisma.post.findMany({
    where: {
      AND: [
        {
          title: {
            contains: "title",
          },
        },
        {
          published: true,
        },
      ],
    },
  });

  const orFiltering = await prisma.post.findMany({
    where: {
      OR: [
        {
          title: {
            contains: "title",
          },
        },
        {
          published: true,
        },
      ],
    },
  });
  //// NOT filtering
  const notFiltering = await prisma.post.findMany({
    where: {
      NOT: [
        {
          title: {
            contains: "title",
          },
        },
      ],
    },
  });

  //// Starts with
  const startsWith = await prisma.post.findMany({
    where: {
      title: {
        startsWith: "This", // endsWith, contains, equals
      },
    },
  });

  //// find user using an array
  const userArray = ["user1", "user2"];

  const findUserByArray = await prisma.user.findMany({
    where: {
      username: {
        in: userArray,
      },
    },
  });

  //// In depth relations
  const depthRelation = await prisma.user.findUnique({
    where: {
      id: 2,
    },
    include: {
      post: {
        include: {
          postCategory: {
            include: {
              category: true,
            },
          },
        },
      },
    },
  });
  console.dir(depthRelation, { depth: Infinity });
};

filtering();
