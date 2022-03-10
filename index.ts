import express from "express";

const app = express();
const port = 3200;

app.get("/", (req, res) => {
  res.send("Well done!");
});

app.listen(3200, () => {
  console.log(`The application is listening on port ${port}!`);
});
