import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const checking = useSelector((state) => state.checkStatusReducer);
  const dispatch = useDispatch();
  return (
    <>
      <h1>{checking}</h1>
      <button type="button" onClick={() => dispatch(checkStatus())}>Check status</button>
    </>
  );
};
export default Categories;
