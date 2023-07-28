require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./db/connection");
const tasks = require("./routes/tasks");

/* middleware */
app.use(express.json());

app.post("/test", (req, res) => {
  console.log(req.body);
  res.send("tested");
});
/* main route */
app.use("/api/v1/tasks", tasks);

const main = async () => {
  await connectDB(process.env.MONGODB_URI);
  app.listen(3000, () => {
    console.log("App is running");
  });
};

main();
