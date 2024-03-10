import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  log: [
    {
      emit: "event",
      level: "query",
    },
  ],
});

prisma.$on("query", (e) => {
  console.log("query", e.query);
  console.log("duration", e.duration, "ms");
  console.log("date & time", e.timestamp);
});

const main = async () => {
  const allData = await prisma.post.findMany();
};
main();
