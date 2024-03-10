// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// const main = async () => {
//   //// Create single data
//   //   const result = await prisma.post.create({
//   //     data: {
//   //       title: "This is title 2",
//   //       content: "This is content 2",
//   //       authorName: "author 2",
//   //     },
//   // });

//   // Create Many
//   const result = await prisma.post.createMany({
//     data: [
//       {
//         title: "This is title 3",
//         content: "This is content 3",
//         authorName: "author 3",
//       },
//       {
//         title: "This is title 4",
//         content: "This is content 4",
//         authorName: "author 4",
//       },
//     ],
//   });

//   console.log(result);
// };

// main();

//// Module 23

import { PrismaClient, userRole } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  // const createUser = await prisma.user.create({
  //   data: {
  //     username: "user4",
  //     email: "user4@gmail.com",
  //     role: userRole.user,
  //   },
  // });
  // const createCategory = await prisma.category.create({
  //   data: {
  //     name: "Software Development",
  //   },
  // });
  // const createProfile = await prisma.profile.create({
  //   data: {
  //     bio: "This is bio...",
  //     userId: 2,
  //   },
  // });

  const createPost = await prisma.post.create({
    data: {
      title: "This is title 2",
      content: "This is content 2",
      authorId: 1,
      postCategory: {
        create: {
          // category: {
          //   connect: {
          //     id: 1,
          //   },
          // },
          categoryId: 1,
        },
      },
    },
    include: {
      postCategory: true,
    },
  });
  console.log(createPost);
};

main();
