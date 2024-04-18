// PaginationComponent.js

import React from 'react';
import './index.css';
import { useDispatch, useSelector } from 'react-redux';
import { changePage, changeItemsPerPage } from '../../ReduxStore/tasksActions';

const PaginationComponent = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector(state => state.tasks.currentPage);
  const itemsPerPage = useSelector(state => state.tasks.itemsPerPage);
  const totalItems = useSelector(state => state.tasks.totalItems);

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    dispatch(changePage(pageNumber));
  };

  const handleItemsPerPageChange = (e) => {
    const newItemsPerPage = parseInt(e.target.value);
    dispatch(changeItemsPerPage(newItemsPerPage));
  };

  return (
    <div className="pagination">
      <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
      <span>Page {currentPage} of {totalPages}</span>
      <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
      <select value={itemsPerPage} onChange={handleItemsPerPageChange}>
        <option value="5">5 per page</option>
        <option value="10">10 per page</option>
        <option value="20">20 per page</option>
      </select>
    </div>
  );
};

export default PaginationComponent;
