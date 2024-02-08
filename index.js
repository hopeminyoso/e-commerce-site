const express = require("express");
const bodyParser = require("body-parser"); // Import body-parser module
const app = express();
const dotenv = require("dotenv").config();
const dbConnect = require("./config/dbConnect");
const { notFound, errorHandler } = require("./middlewares/errorHandler");
const PORT = process.env.PORT || 4000;
const authRouter = require("./routes/authRoute");

dbConnect();

// Use body-parser middleware to parse JSON requests
app.use(bodyParser.json());

// Use body-parser middleware to parse URL-encoded requests
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/user", authRouter);
app.use(notFound);
app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});

