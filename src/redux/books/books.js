const ADD_BOOK = 'bookstore/books/ADD_BOOK ';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOKs';

const initialState = [
  {
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    id: 1,
  },
  {
    title: 'Dune',
    author: 'Frank Herbert',
    id: 2,
  },
  {
    title: 'Capital in Twenty-First Century',
    author: 'Suzanne Collins',
    id: 3,
  },
  {
    title: 'What the wise man fear',
    author: 'William SheckSpear',
    id: 4,
  },
];

export const addBook = (NewBook) => ({
  type: ADD_BOOK,
  payload: NewBook,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

const BookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          id: Math.random(),
          title: action.payload.title,
          author: action.payload.author,
        },
      ];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

export default BookReducer;
