export const receiveBooks = (books) => ({
  type: 'RECEIVED_BOOKS',
  books
});

export const fetchBooks = () => {
  return fetch("http://localhost:8000/api/books")
    .then(response => response.json())
    .then(books => {
      return receiveBooks(books);
    })
};
