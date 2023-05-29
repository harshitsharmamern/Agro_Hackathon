const mongoose = require("mongoose");
// require("dotenv").config();
// const 
// const link = "mongodb://localhost:27017/Agro_hackathon"
// const link = "mongodb+srv://anuragtiwari:anurag1234@clusterfortnpproject.2ri4uvj.mongodb.net/tnpProjectDB?retryWrites=true&w=majority"
const link ="mongodb+srv://database:database@cluster0.z0wy1h3.mongodb.net/june4thyearproject?retryWrites=true&w=majority"


// const link = process.env.DATABASE
const connectToMongo = () => {
  mongoose
    .connect(link)
    .then(() => {
      console.log("Connected to Database");
    })
    .catch((err) => {
      console.log("Some error occured in database connection", err);
    });
};

module.exports = connectToMongo;
