import axios from "axios";

// The getBooks method retrieves books from the server
// It accepts a "query" or term to search the books api for
export default {
  getBooks: function (title) {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${title}`);
  },
};
