import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const rawQuery = async () => {
  // Find all users
  const users = await prisma.$queryRaw`SELECT * FROM "users"`;

  // Remove all data from database
  await prisma.$queryRaw`TRUNCATE TABLE "users" CASCADE`;
  await prisma.$queryRaw`TRUNCATE TABLE "categories" CASCADE`;
};

rawQuery();
