const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("welcome to books");
});

// get /books => all books return
// post /books => add book into books
// delete /books => delete a book

let books = [];

app.get("/books", (req, res) => {
  res.send(books);
});

app.post("/books", (req, res) => {
  books.push({
    id: books.length + 1,
    name: req.body.name,
  });

  res.send(books);
});

app.delete("/books/:id", (req, res) => {
  books = books.filter((i) => i.id != req.params.id);
  res.send(books);
});

app.listen(3000, () => {
  console.log("Listening at port 3000");
});
