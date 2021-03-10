const express = require("express");
const app = express();

const indexRouter = require("./routes/index");
const booksRouter = require("./routes/books");

app.use(express.json());

app.use("/", indexRouter);
app.use("/books", booksRouter);

module.exports = app;
