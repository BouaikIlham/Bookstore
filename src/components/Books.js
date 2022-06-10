import React from 'react';
import Form from './Form';
import Book from './Book';

const Books = () => {
  const books = [
    {
      id: 1,
      title: 'Harry pooter',
      author: 'jakline monroe',
    },
    {
      id: 2,
      title: 'Rich dad',
      author: 'Ryosaki',
    },
  ];
  return (
    <>
      <Form />
      {books.map((book) => {
        return <Book key={book.id} title={book.title} author={book.author} />;
      })}
    </>
  );
};

export default Books;
