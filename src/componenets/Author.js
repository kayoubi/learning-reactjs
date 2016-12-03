import React from 'react';

import {data} from '../data';

const Author = ({authorId}) => {
  const author = data.authors[authorId];
  return (
    <div>
      {author ? author.firstName + " " + author.lastName : "multiple"}
    </div>
    // {props.authroId};
  );
};

export default Author;