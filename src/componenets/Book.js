import React from 'react';

import Author from './Author';

const Book = ({book, handleDelete}) => {
  const handleClick = (event) => {
    event.preventDefault();
    handleDelete(book.id)
  };

  const formatPrice = cent =>
    `$ ${(cent/100).toFixed(2)}`;


  return (
    <li className="book">
      <div className="title">
        {book.title}
      </div>
      <div className="price">
        {formatPrice(book.price)}
      </div>
      <dev>
        <Author authorId={book.authorId} />
      </dev>
      <a href="#" className="delete" onClick={handleClick}>
        delete
      </a>
    </li>
  );
};

export default Book;