import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Book = ({
  title,
  category,
  author,
  handleRemove,
}) => {
  const randomProgress = (min = 20, max = 85) => (Math.floor(Math.random() * (max - min)) + min);
  const randomChapter = (min = 1, max = 15) => (Math.floor(Math.random() * (max - min)) + min);

  const percentage = randomProgress();

  return (
    <div className="book-container">
      <div className="book-wrapper">
        <p className="normal-text dark font-bold">{category}</p>
        <h4 className="title-book">{title}</h4>
        <p className="normal-text dark blue-text">{author}</p>
        <div className="book-buttons">
          <button type="button">Comment</button>
          <button type="button" onClick={handleRemove}>
            Remove
          </button>
          <button type="button">Edit</button>
        </div>
      </div>

      <div className="progress-container">
        <div className="bar-wrapper">
          <CircularProgressbar className="percentage" value={percentage} text={`${percentage}%`} />
          <span>
            <p className="normal-text darker">Completed</p>
          </span>
        </div>
        <hr />
        <div className="chapter-wrapper">
          <h4 className="normal-text darker styled-font">CURRENT CHAPTER</h4>
          <p className="normal-text styled-font">
            Chapter
            {' '}
            {randomChapter()}
          </p>
          <button type="button" className="update-button">UPDATE PROGRESS</button>
        </div>
      </div>
    </div>

  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  handleRemove: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
