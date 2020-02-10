const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const { moviesRouters, movcatRouters, categoryRouters } = require("./routers");

const db = require("./connection/index");
db.connect(err => {
  if (err) throw err;
  console.log("MySql connected...");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());
app.get("/", (req, res) => res.send("HELLO FROM BACKEND!"));
app.use("/movie", moviesRouters);
app.use("/category", categoryRouters);
app.use("/movcat", movcatRouters);

const PORT = process.env.PORT || 4100;
app.listen(PORT, console.log(`Server running on port : ${PORT}`));
