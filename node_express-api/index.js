import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import usersRoutes from "./routes/users.js";
const app = express();
const PORT = 58120;
app.use(cors());
app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.send("hello");
});
app.use("/users", usersRoutes);
app.listen(PORT, () =>
  console.log(`Welcome to my World on port:http://localhost:${PORT} `)
);
