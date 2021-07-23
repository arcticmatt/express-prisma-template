import express from "express";

const main = async () => {
  const app = express();

  const port = Number(process.env.SERVER_PORT);
  const host = process.env.SERVER_HOST as string;

  app.get("/", (req, res) => {
    res.send("Hello World!");
  });

  app.listen(port, host, () => {
    console.log(`Example app listening at http://${host}:${port}`);
  });
};

main();
