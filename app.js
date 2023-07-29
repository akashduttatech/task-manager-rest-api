require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./db/connection");
const tasks = require("./routes/tasks");
const notFound = require("./middleware/notFound");

/* middleware */
app.use(express.json());

/* main route */
app.use("/api/v1/tasks", tasks);
/* not found route */
app.use(notFound);

const main = async () => {
  await connectDB(process.env.MONGODB_URI);
  app.listen(3000, () => {
    console.log("App is running");
  });
};

main();
