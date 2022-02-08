// require("")
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bcrypt = require("bcrypt");
require("dotenv").config();

const session = require("express-session");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const JWT = require("jsonwebtoken");

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    key: "userid",
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 1000 * 60 * 60 * 24,
    },
  })
);

var db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

db.connect();

app.post("/register", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const phone = req.body.phone;
  const password = req.body.password;

  bcrypt.hash(password, 10, (err, hash) => {
    if (err) {
      console.log(err);
    }

    db.query(
      "SELECT * FROM user WHERE email = ? AND phone = ?", [email, phone], 
      (err, result) => {
        if (err) {
          res.send({ err: err });
        }

        if (result.length > 0) {
          res.send({error: "User already exists with your Email or Phone No."})
        } else {
          db.query(
            "INSERT INTO user (name, email, phone, password) VALUES (?,?,?,?)",
            [name, email, phone, hash],
            (err) => {
              if (err) {
                res.send({ err: err });
              } else {
                res.send({ successfull: "registration successfull go to login" });
              }
            }
          );
        }
      }
    );
  });
});

app.get("/login", (req, res) => {
  if (req.session.user) {
    res.send({ logged: true, user: req.session.user });
  } else {
    res.send({ logged: false });
  }
});

const verifyJWT = (req, res, next) => {
  const Token = req.headers["x-access-token"];

  if (!Token) {
    res.send({
      auth: false,
      message: "faild to authenticate, no token received",
    });
  } else {
    JWT.verify(Token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        res.send({ auth: false, message: "faild to authenticate" });
      } else {
        res.userId = decoded.id;
        next();
      }
    });
  }
};

app.get("/userauth", verifyJWT, (req, res) => {
  res.send({ auth: true, message: "you are authenticated" });
});

app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  db.query(
    "SELECT * FROM user WHERE email = ?",
    email,
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }

      if (result.length > 0) {
        bcrypt.compare(password, result[0].password, (error, response) => {
          if (response) {
            const id = result[0].user_id;
            const token = JWT.sign({ id }, process.env.JWT_SECRET, {
              expiresIn: 60 * 60 * 24,
            });
            req.session.user = result[0].name;

            res.json({ auth: true, token: token, result: result[0].name });
          } else {
            res.json({
              auth: false,
              message: "incorrect username or password",
            });
          }
        });
      } else {
        res.json({ auth: false, message: "user dosen't exist" });
      }
    }
  );
});

app.get("/logout", (req, res) => {
  req.session.destroy();
  res.send({ message: "successfully logged out" });
});

app.get("/products", (req, res) => {
  db.query("SELECT * FROM productinfo", (err, result) => {
    if (err) {
      res.send({ err: err });
    }
    if (result.length > 0) {
      res.send({ result: result });
    } else {
      res.send({ err: "Products not found" });
    }
  });
});

app.listen(process.env.PORT, () => {
  console.log(`running on localhost`, process.env.PORT);
});
