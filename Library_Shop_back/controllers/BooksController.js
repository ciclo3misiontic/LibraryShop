const booksModel = require ("../models/BooksModel");


module.exports = class BooksController {

    static async getAllBooks (request, response){
        try {
            const books = await booksModel.find();
            if (books!=null){
                response.status(200).json(books);
            }else{
                response.status(404).json();
            }
        } catch (error) {
            response.status(400).json({message: error.message});
        }
    };

    static async getBooksByTitle (request, response) {
        try {
            const title = request.params.title;
            const books = await booksModel.find({title: title});
            if (books!=null){
                response.status(200).json(books);
            }else{
                response.status(404).json();
            }
        
        } catch (error) {
            response.status(400).json({message: error.message})
        }
    };

    static async getBooksByAuthor (request, response) {
        try {
            const author = request.params.author;
            const books = await booksModel.find({author: author});
            if (books!=null){
                response.status(200).json(books);
            }else{
                response.status(404).json();
            }
        
        } catch (error) {
            response.status(400).json({message: error.message})
        }
    };
    static async updateBook (request, response) {
        try {
            const idbook = request.params.idbook;
            const data = request.body;
            const book = await booksModel.updateOne({idbook: idbook}, data);
            response.status(200).json(book);
        } catch (error) {
            response.status(400).json({message: error.message});
        }
    };

    static async insertBook (request, response) {
        try {
            const document = request.body;
            //validar estructura de documento y tipo de dato
            const book = await booksModel.create(document);
            response.status(201).json(book);
        } catch (error) {
            response.status(400).json({message: error.message});
        }
    };

    static async deleteBook (request, response) {
        try {
            const idbook = request.params.idbook;
            const book = await booksModel.findOneAndDelete({idbook: idbook});
            response.status(200).json(book);
        } catch (error) {
            response.status(400).json({message: error.message});
        }
    };
}