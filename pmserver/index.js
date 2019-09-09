const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const serverPort = process.env.SERVER_PORT;
const dburl = process.env.DBURL;
const dburllocal = process.env.DBURLLOCAL;

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(dburllocal, {
    useNewUrlParser: true
  })
  .catch(err => console.log(err));

const connection = mongoose.connection;

connection.on("open", () => {
  console.log("MongoDB database connection established successfully");
});

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    }
  },
  {
    timestamp: true
  }
);

const User = mongoose.model("User", userSchema);

app.get("/users", (req, res) => {
  console.log("here");
  User.find()
    .then(user => res.json(user))
    .catch(err => res.json(`Error: ${err}`));
});

app.post("/users/add", (req, res) => {
  const username = req.body.username;
  const email = req.body.email;

  console.log(req.body);

  const newUser = new User({
    username,
    email
  });

  newUser
    .save()
    .then(() => res.json("User added!"))
    .catch(err => res.json(`Error: ${err}`));
});

app.listen(parseInt(serverPort), () =>
  console.log(`Server is runnong on port ${serverPort}`)
);
