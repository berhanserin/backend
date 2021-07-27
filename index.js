const { v4: uuidv4 } = require("uuid");
const express = require("express");
const app = express();
const db = require("./data/data.json");
const bodyParser = require("body-parser");

let port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.send(200, db);
});

app.get("/todo", (req, res) => {
  res.send(200, db);
});

app.get("/todo/:id", (req, res) => {
  if (req.params.id === null) {
    res.send(400, {
      message: "İşlenemeyen Veri...",
    });
  } else {
    const todo = db.find((u) => u.id === req.params.id);
    if (todo) {
      res.send(200, todo);
    } else {
      res.send(404, { message: "Böyle bir kayıt yok....." });
    }
  }
});

app.post("/todo", (req, res) => {
  const SaveData = {
    id: uuidv4(),
    title: req.body.title,
    bitti: false,
  };
  if (req.body.title === null) {
    res.send(400, { message: "İşlenemeyen veri...." });
  } else {
    db.push(SaveData);
    res.send(200, SaveData);
  }
});

app.put("/todo/:id", (req, res) => {
  if (req.params.id === null) {
    res.send(400, {
      message: "İşlenemeyen Veri...",
      id: req.params.id,
    });
  } else {
    const todo = db.find((u) => u.id === req.params.id);
    if (todo) {
      // pass by reference
      // pass by value
      Object.keys(req.body).forEach((key) => {
        todo[key] = req.body[key];
      });
      res.send(200, todo);
    } else {
      res.send(404, { message: "Böyle bir kayıt yok....." });
    }
  }
});

app.delete("/todo/:id", (req, res) => {
    if (req.params.id===null) {
      res.send(400, {
        message: "İşlenemeyen Veri...",
        id:req.params.id
      });
    } else {
      const todo = db.findIndex((u) => u.id === req.params.id);
      if (todo>-1) {
        db.slice(todo,1);
        res.send(201, {message:"İşlem Silindi"});
      } else {
        res.send(404, { message: "Böyle bir kayıt yok....." });
      }
    }
});

app.listen(port, () => {
  console.log(`Example app is listening on port ${port}`);
});
