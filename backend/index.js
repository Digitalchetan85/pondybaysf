const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bcrypt = require("bcrypt");
require("dotenv").config();

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const JWT = require("jsonwebtoken");

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:4000"],
    credentials: true,
  })
);

var db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

db.connect();

app.get("/products", (req, res) => {
  // const body = req.body;

  db.query("SELECT * from productinfo", (err, product) => {
    if (err) {
      res.send({ err: err, message: "try again !!!" });
    }
    if (product) {
      res.send({ message: product });
    } else {
      res.send({ message: "Add product" });
    }
  });
});

app.post("/products", (req, res) => {
  db.query(
    "SELECT * FROM productinfo where productTitle = ?",
    [req.body.productTitle],
    (err, product) => {
      if (err) {
        res.send({ err: err, message: "try again !!!" });
      }
      if (product.length > 0) {
        res.send({ message: "product exists", product: product });
      } else {
        // res.send({message: "Add product"})
        db.query(
          "INSERT INTO productinfo (productTitle, price, price1, description, imgURL, alt) VALUES (?,?,?,?,?,?)",
          [
            req.body.productTitle,
            req.body.price,
            req.body.price1,
            req.body.description,
            req.body.imgURL,
            req.body.alt,
          ],
          (error, result) => {
            if (error) {
              res.send({ error: error });
            }
            if (result.affectedRows) {
              res.send({ message: "success" });
            } else {
              res.send({ message: "Unable to add the data.", error: error });
            }
          }
        );
      }
    }
  );
});

app.get("/products/:id", (req, res) => {
    const id = req.params.id;

    db.query("SELECT * FROM productinfo WHERE id = ?", [id], (err, result) => {
      if (err) {
        res.send({ err: err, message: "Unable to find product"})
      }
      if (result.length > 0) {
        res.send({ data: result, message: "success" })
      } else {
        res.send({ err: err, message: "Unable to find product"})
      }
    })
})

app.patch("/products", (req, res) => {
  const body = req.body;

  db.query("UPDATE productinfo SET productTitle = ?, price = ?, price1 = ?, description = ?, imgURL = ?, alt = ? where id = ?" , [body.productTitle, body.price, body.price1, body.description, body.imgURL, body.alt, body.id], (err, result) => {
    if (err) {
      res.send({err: err});
    }
    if (result.affectedRows) {
      res.send({result: result, message: "success"});
    } else {
      res.send({message: "error"});
    }
  })
})

app.delete("/products/:id", (req, res) => {
  const id = req.params.id;

  db.query("DELETE FROM productinfo WHERE id = ?", id, (err, rows) => {
    if(err) {
      res.send({err: err, message: "error"});
    } else {
      res.send({message: "Successfully deleted product"});
    }
  })
})


app.listen(process.env.PORT, () => {
  console.log("Port No", process.env.PORT);
});
