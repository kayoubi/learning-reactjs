import React from 'react';

import Book from './Book'
import Form from './Form'

class BookList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {books: props.books};
  }

  render() {
    return (
      <ul className="book-list">
        {this.state.books.map(book =>
          <Book
            key={book.id}
            book={book}
            handleDelete={this.removeBook}
          />
        )}
        <Form addBook={this.addBook}/>
      </ul>
    );
  }

  addBook = (title, price) => {
    console.log(title);

    const newBooks = this.state.books.concat({
      id: new Date(),
      title,
      price
    });
    this.setState({books: newBooks});
  };

  removeBook = bookId => {
    const newBooks = this.state.books.filter(book => book.id !== bookId);
    this.setState({books: newBooks})
  }
}

export default BookList;