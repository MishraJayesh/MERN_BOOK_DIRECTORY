const express = require("express");
const { getAllBooks, addBooks, getById, updateBooks, deleteBooks } = require('../controller/books.controller');
const router = express.Router();

router.get("/", getAllBooks);
router.post("/add", addBooks);
router.get("/:id", getById);
router.put("/:id", updateBooks);
router.delete("/:id", deleteBooks);

module.exports = router;