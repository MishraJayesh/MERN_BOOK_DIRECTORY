const Book = require("../model/books.model");

async function addBooks(req, resp) {
  let book = new Book(req.body);
  let result = await book.save();
  resp.send(result);
};

async function getBooks(req, resp) {
  const books = await Book.find();
  if (books.length > 0) {
    resp.send(books)
  } else {
    resp.send({ result: "No Book Found" })
  }
};

async function deleteBooks(req, resp) {
  let result = await Book.deleteOne({ _id: req.params.id });
  resp.send(result)
};

async function getBookById(req, resp) {
  let result = await Book.findOne({ _id: req.params.id })
  if (result) {
    resp.send(result)
  } else {
    resp.send({ "result": "No Record Found." })
  }
};

async function updateBook(req, resp) {
  let result = await Book.updateOne(
    { _id: req.params.id },
    { $set: req.body }
  )
  resp.send(result)
};

async function updateBooks(req, resp) {
  let result = await Book.updateOne(
    { _id: req.params.id },
    { $set: req.body }
  )
  resp.send(result)
};

async function getSearch(req, resp) {
  let result = await Book.find({
    "$or": [
      {
        name: { $regex: req.params.key }
      },
      {
        author: { $regex: req.params.key }
      },
      {
        category: { $regex: req.params.key }
      },
      {
        price: { $regex: req.params.key }
      }
    ]
  });
  resp.send(result);
};

module.exports = { addBooks, getBookById, getBooks, deleteBooks, updateBook, updateBooks, getSearch };