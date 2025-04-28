import books from '../booksCollection.js';

// List all books
export const getAllBooks = (req, res) => {
  res.json(books);
};

// Get book details by ID 
export const getBookById = (req,res) => {
    const book = books.find(bk => bk.id === req.params.id);

    if (!book){
        return res.status(404).json({error: "Book not found!"})
    }
    else{
        res.json(book)
    }
}

// Add a new book 
export const addBook = (req, res) => {
    const {id, name, author, publishedYear} = req.body

    if(!id || !name || !author || !publishedYear){
        return res.status(400).json({ error: "All fields are required!"});
    }

    const exist = books.find(bk => bk.id === id)
    if(exist){
        return res.status(400).json({error: "This book is exist!"})
    }

    const newBook = { id, name, author, publishedYear };
    books.push(newBook);
    res.status(201).json(newBook);
}

// Update an existing book
export const updateBook = (req, res) => {
    const book = books.find(bk => bk.id === req.params.id)

    if(!book){
        return res.status(404).json({error: "Book not found!"})
    }

    const {name, author, publishedYear} = req.body;

    if(!name || !author || !publishedYear){
        return res.status(400).json({ error: "All fields are required!" });
    }

    book.name = name;
    book.author = author;
    book.publishedYear = publishedYear;
  
    res.json({ message: "Book updated successfully!"});
}

// Delete a book 
export const deleteBook = (req, res) => {
    const index = books.findIndex(bk => bk.id === req.params.id);

    if(index === -1){
        return res.status(404).json({error: "Book not found!"})
    }

    books.splice(index, 1)
    res.json({ message: "Book deleted successfully"});
}