import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Aggregates works with only number type fields (_count works with all fields)

const aggregates = async () => {
  // Find average age
  const avgAge = await prisma.user.aggregate({
    _avg: {
      age: true,
    },
  });
  // Find age sum
  const sumAge = await prisma.user.aggregate({
    _sum: {
      age: true,
    },
  });
  // Find count of age
  const countAge = await prisma.user.aggregate({
    _count: {
      age: true,
    },
  });
  // Find total records in the table
  const totalRecords = await prisma.user.count();
  // Find max age
  const maxAge = await prisma.user.aggregate({
    _max: {
      age: true,
    },
  });
  // Find min age
  const minAge = await prisma.user.aggregate({
    _min: {
      age: true,
    },
  });
  console.log(minAge);
};
aggregates();
