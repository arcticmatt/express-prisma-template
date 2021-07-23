import { PrismaClient } from "@prisma/client";
import express from "express";

const main = async () => {
  const app = express();

  const port = Number(process.env.SERVER_PORT);
  const host = process.env.SERVER_HOST as string;

  app.get("/", async (req, res) => {
    const prisma = new PrismaClient();
    const data = await prisma.todos.findMany();
    console.log("data", data);

    res.send(`Hello World! ${JSON.stringify(data)}`);
  });

  app.listen(port, host, () => {
    console.log(`Example app listening at http://${host}:${port}`);
  });
};

main();
