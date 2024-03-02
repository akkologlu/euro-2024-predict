const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const AuthRoute = require("./routes/AuthRoute");
const UserRoute = require("./routes/UserRoute");
const TeamRoute = require("./routes/TeamRoute");
const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

dotenv.config();

const PORT = process.env.PORT;
const CONNECTION_URL = process.env.CONNECTION_URL;

mongoose
  .connect(CONNECTION_URL)
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));

app.use("/auth", AuthRoute);
app.use("/user", UserRoute);
app.use("/team", TeamRoute);
