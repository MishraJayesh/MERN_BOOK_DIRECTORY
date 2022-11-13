const express = require("express");
const { getBookById, getBooks, addBooks, updateBook, updateBooks, deleteBooks, getSearch } = require('../controller/books.controller');
const router = express.Router();

router.post("/add-book", addBooks);
router.get("/books", getBooks);
router.delete("/book/:id", deleteBooks);
router.get("/book/:id", getBookById);
router.put("/book/:id", updateBook);
router.put("/book/:id", updateBooks);
router.get("/search/:key", getSearch);

module.exports = router;