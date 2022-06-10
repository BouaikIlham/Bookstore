import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ title, author }) => (
  <>
    <h3>{title}</h3>
    <span>{author}</span>
    <button type="button">remove</button>
  </>
);

Book.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
};

Book.defaultProps = {
  title: '',
  author: '',
};
export default Book;
