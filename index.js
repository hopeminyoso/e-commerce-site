const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const dbConnect = require("./config/dbConnect");
const PORT = process.env.PORT || 4000;
const authRouter = require("./routes/authRoute");

dbConnect();
app.use("/api/user", authRouter);
app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});
