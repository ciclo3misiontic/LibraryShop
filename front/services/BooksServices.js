import httpClient from "./httpClient";

const END_POINT = "/api/books";
const END_POINT_PROFILE = "/api/profiles";

const getAllBooks = () => httpClient.get(END_POINT);
const getBooksByTitle = (title) => httpClient.get(`${END_POINT}/title/${title}`);
const updateBook = (idbook, data) => httpClient.put(`${END_POINT}/idbook/${idbook}`, data);
const insertBook = (book) => httpClient.post(END_POINT, book);
const deleteBook = (idbook) => httpClient.delete(`${END_POINT}/idbook/${idbook}`); 

const insertProfile = (profile) =>httpClient.post(END_POINT_PROFILE, profile);


export {

    getAllBooks,
    getBooksByTitle,
    updateBook,
    deleteBook,
    insertBook,

    insertProfile,
}