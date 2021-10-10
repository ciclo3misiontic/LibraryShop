const mongoose = require ("mongoose");


const booksSchema = mongoose.Schema ({
    idbook: String,
    title: String,
    author: Array,
    year: Number,
    quantity: Number
})

module.exports = mongoose.model("books", booksSchema);