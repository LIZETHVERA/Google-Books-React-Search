// Require mongoose dependency
const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
const BookSchema = new Schema({
    // `title` is required and of type String
    title: {
        type: String,
        required: true
    },
    // `authors` is required and is an array of type String
    authors: [{
        type: String,
        required: true
    }],
    // `description` is required and of type String
    description: {
        type: String,
        required: true
    },
    // `image` is required and of type String
    image: {
        type: String,
        required: true
    },
    // `link` is required and of type String
    link: {
        type: String,
        required: true
    }
});

// This creates our model from the above schema, using mongoose's model method
const Book = mongoose.model("Book", BookSchema);

// Export the Book model
module.exports = Book;
