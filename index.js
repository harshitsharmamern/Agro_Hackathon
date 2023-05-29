const express = require("express");
const app = express();
const connectToMongo = require("./database/db");
const cors = require("cors");
const port = process.env.PORT || 5000
// require("dotenv").config();
app.use(cors());
// const port = 5000
// const port=  5000
// to use req.body
app.use(express.json());

connectToMongo();

app.use('/api',require('./route/user'))

app.listen(port, () => {
  console.log("Server is listening at port 5000");
});

// localhost:5000/api/auth/createuser