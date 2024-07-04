import express from "express";

const app = express();
const port = process.env.PORT || 3000;
const connectDb = require("./db");
const newsRoutes = require("./routes/newsRoutes");

connectDb();

// parses incoming requests with JSON payloads and is based on body-parser
app.use(express.json());

app.get("/", (req, res) => {
  res.json("hello, this is entry of backend");
});

app.use("/api", newsRoutes);

app.listen(port, () => {
  console.log(`Server started running on ${port}`);
});
