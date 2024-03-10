import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const update = async () => {
  //   const singleUpdate = await prisma.post.update({
  //     where: {
  //       id: 1,
  //     },
  //     data: {
  //       title: "updated title",
  //     },
  //   });

  //   const updateMany = await prisma.post.updateMany({
  //     where: {
  //       title: "This is title 2",
  //     },
  //     data: {
  //       published: true,
  //     },
  //   });

  const upsertData = await prisma.post.upsert({
    where: {
      id: 7,
    },
    update: {
      title: "Upsert title",
      authorName: "Jubayer Hossain",
    },
    create: {
      title: "This is title 10",
      content: "This is content 10",
    },
  });
  console.log(upsertData);
};

update();
