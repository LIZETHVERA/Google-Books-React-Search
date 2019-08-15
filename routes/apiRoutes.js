// // Require all models
// const db = require("../models");

// // Export API routes
// module.exports = app => {
//   // Getting all the books from the database
//   app.get("/api/books", (req, res) => {
//       db.Book.find({})
//       .then(response => res.json(response))
//       .catch(err => res.json(err));
//   });

//   // Adding a book to the database
//   app.post("/api/books", (req, res) => {
//       db.Book.create({
//           title: req.body.title,
//           authors: req.body.authors,
//           description: req.body.description,
//           image: req.body.image,
//           link: req.body.link
//       })
//       .then(response => res.json(response))
//       .catch(err => res.json(err));
//   });

//   // Delete a specified book from the database
//   app.delete("/api/books/:id", (req, res) => {
//       db.Book.deleteOne({
//           _id: req.params.id
//       })
//       .then(response => res.json(response))
//       .catch(err => res.json(err));
//   });
// };