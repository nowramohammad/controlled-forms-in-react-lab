import { useState } from 'react';
const Bookshelf = () => {
    const [books, setBooks] = useState([
        { title: 'Fourth Wing', author: 'Rebecca Yarros' },
        { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
      ]);

    const [newBook, setNewBook] = useState({ title: '', author: ''});
const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewBook((prevNewBook) => ({
        ...prevNewBook,
        [name]: value,

    }));
};
const handleSubmit = (event) => {
    event.preventDefault();
    setBooks((prevBooks) => [...prevBooks, newBook]);
    setNewBook({ title: '',author: ''})
};
return (
    <div className="bookshelfDiv">
      {/* Form to add a new book */}
      <div className="formDiv">
        <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={newBook.title}
              onChange={handleInputChange}
              placeholder="Enter book title"
              required
            />
          </div>
          <div>
            <label htmlFor='author'>Author</label>
            <input
             type="text"
             id="author"
             name="author"
             value={newBook.author}
             onChange={handleInputChange}
             placeholder="Enter book author"
             required
           />
           </div>
           <button type='submit'>Add Book</button>
           </form>
           </div>
           <div className="bookCardsDiv">
        {books.map((book, index) => (
          <div className="bookCard" key={index}>
            <h4>{book.title}</h4>
            <p>{book.author}</p>
          </div>
        ))}
      </div>
    </div>
);


};

export default Bookshelf;
