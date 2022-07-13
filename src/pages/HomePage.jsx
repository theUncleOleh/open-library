import { useState, useEffect } from 'react';
import * as booksApi from '../restAPI/book-api';
import SearchBooks from '../components/SearchBooks/SearchBooks';
export default function HomePage(params) {
  const [bookName, setBookName] = useState('');
  const [books, setBooks] = useState([]);
  const handleSubmit = query => {
    setBookName(query);
  };
  useEffect(() => {
    booksApi
      .getBooks(bookName)
      .then(res => setBooks(res.data.items))
      .catch(error => console.log(error));
  }, [bookName]);
  return (
    <>
      <SearchBooks onSubmit={handleSubmit} />
      <ul>
        {books &&
          books.map(book => (
            <li key={book.id}>
              <img
                src={book.volumeInfo.imageLinks.smallThumbnail}
                alt={book.volumeInfo.title}
              />
              <span>{book.volumeInfo.title}</span>
            </li>
          ))}
      </ul>
    </>
  );
}
