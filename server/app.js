const express = require("express");
const app = express();
const port = 3000;

const indexRouter = require("./routes/index");
const booksRouter = require("./routes/books");

app.use(express.json());

app.use("/", indexRouter);
app.use("/books", booksRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
