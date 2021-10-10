const express = require ("express");

const BooksController = require ("../controllers/BooksController");
const ProfilesController = require("../controllers/ProfilesController");

const router = express.Router();

//Books Rutes 

router.get('/books', BooksController.getAllBooks);
router.get('/books/title/:title', BooksController.getBooksByTitle);
router.get('/books/author/:author', BooksController.getBooksByAuthor);
router.put('/books/idbook/:idbook', BooksController.updateBook);
router.post('/books', BooksController.insertBook);
router.delete('/books/idbook/:idbook', BooksController.deleteBook);

//Porfile Rutes
router.get('/profiles', ProfilesController.getAllProfiles);
router.post('/profiles', ProfilesController.insertProfile);

module.exports = router;