const STATUS = 'bookstore/categories/CHECK_STATUS';

const checkStatusReducer = (state = [], action) => {
  switch (action.type) {
    case STATUS:
      return 'Under construction';

    default:
      return state;
  }
};

export const checkStatus = () => ({ type: STATUS });
export default checkStatusReducer;
