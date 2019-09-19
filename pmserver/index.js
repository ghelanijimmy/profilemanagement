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
    email: {
      type: String
    },
    firstname: {
      type: String
    },
    lastname: {
      type: String
    },
    password: {
      type: String
    },
    gateway: {
      type: String
    },
    mobile: {
      type: Number
    }
  },
  {
    timestamp: true
  }
);

const User = mongoose.model("User", userSchema);

app.get("/users", (req, res) => {
  User.find()
    .then(user => res.json(user))
    .catch(err => res.json(`Error: ${err}`));
});

app.post("/users/login", (req, res) => {
  User.findOne(
    { email: req.body.email, password: req.body.password },
    (err, data) => {
      if (err) return err;
      else {
        res.json(
          Object.assign({}, data !== null ? data._doc : data, {
            isValid: data !== null
          })
        );
      }
    }
  ).catch(err => res.json(err));
});

app.post("/users/add", (req, res) => {
  const email = req.body.email;
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const password = req.body.password;
  const gateway = req.body.gateway;
  const mobile = req.body.mobile;

  console.log(req.body);

  const newUser = new User({
    email,
    firstname,
    lastname,
    password,
    gateway,
    mobile
  });

  newUser
    .save()
    .then(data => res.json(data))
    .catch(err => res.json(`Error: ${err}`));
});

app.listen(parseInt(serverPort), () =>
  console.log(`Server is runnong on port ${serverPort}`)
);
