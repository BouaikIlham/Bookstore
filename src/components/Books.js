/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Form from './Form';
import Book from './Book';
import { deleteBook, fetchBook } from '../redux/books/books';

const Books = () => {
  const library = useSelector((state) => state.Bookreducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBook());
  }, []);
  const handleRemove = (Id) => {
    dispatch(deleteBook(Id));
  };
  return (
    <div className="books-container">
      {library.map((book) => (
        <Book title={book.title} author={book.author} category={book.category} key={book.item_id} handleRemove={() => handleRemove(book.item_id)} />
      ))}
      <Form />
    </div>
  );
};

export default Books;
