const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const cors = require("cors");
const router = require("./router/router");
require("dotenv").config();
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use("/", router);
app.use(cors());

async function run() {
  try {
    app.listen(process.env.port, () => {
      console.log(`listening on port ${process.env.port}`);
    });
  } catch (err) {
    console.log(err.message);
  }
}
run();
