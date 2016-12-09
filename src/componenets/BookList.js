import React from 'react';

import Book from './Book'
import Form from './Form'

import configureStore from '../store';
import * as actions from '../actions';

class BookList extends React.Component {
  constructor(props) {
    super(props);
    this.store = configureStore();
    this.state = this.store.getState();
    // this.state = {books: []};
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

  componentDidMount() {
    this.unsubscribe = this.store.subscribe(() => {
      this.setState(this.store.getState());
    });

    this.store.dispatch(actions.fetchBooks());
    // fetch("http://localhost:8000/api/books")
    //   .then(response => response.json())
    //   .then(books => {
    //     this.setState({books: books})
    //   })
  }

  componenetWillUnmount() {
    this.unsubscribe();
  }

  addBook = (title, price) => {
    // const newBooks = this.state.books.concat({
    //   id: new Date(),
    //   title,
    //   price
    // });
    // this.setState({books: newBooks});
  };

  removeBook = bookId => {
    // const newBooks = this.state.books.filter(book => book.id !== bookId);
    // this.setState({books: newBooks})
  }
}

export default BookList;