import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const batchTransaction = async () => {
  const createUser = prisma.user.create({
    data: {
      username: "user5",
      email: "user5@gmail.com",
    },
  });

  const updateUser = prisma.user.update({
    where: {
      id: 2,
    },
    data: {
      age: 40,
    },
  });

  const [createUserData, updatedUserData] = await prisma.$transaction([
    createUser,
    updateUser,
  ]);

  console.log(createUserData, updatedUserData);
};

batchTransaction();
