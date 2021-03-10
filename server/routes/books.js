const express = require("express");
const router = express.Router();
const faker = require("faker");
const genreController = require("../controllers/genres");
const genres = genreController.getGenres();
const genreIndex = faker.random.number(genres.length - 1);
const title = faker.lorem.words();
const book = {
  title: `${title[0].toUpperCase()}${title.slice(1)}`,
  author: faker.name.findName(),
  genre: genres[genreIndex],
  release_date: faker.date.recent()
};

router.get("/", function(req, res, next) {
  res.send(book);
});

module.exports = router;
