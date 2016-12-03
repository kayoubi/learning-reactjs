import React from 'react';
import ReactDOM from 'react-dom';

import BookList from './componenets/BookList'
import {data} from './data';

ReactDOM.render(
  <BookList books={data.books}/>,
  document.getElementById('root')
);
