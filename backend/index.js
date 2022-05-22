const express = require("express");
const cors = require("cors");
let fs = require("fs");

const PORT = process.env.PORT || 4001;

const { loadData } = require("./loadData");

//set up app
const app = express();
app.use(cors());

//app endpoints
app.get("/", loadData);

//set the server ot listen
app.listen(PORT, () => {
  console.log("Running full speed on port " + PORT);
});
