import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import data from '../data.json'
import './helper/'

const Pagination = ({ itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [displayData, setDisplayData] = useState([]);

  useEffect(() => {
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentData = data.slice(startIndex, endIndex);
    setDisplayData(currentData);
  }, [currentPage, itemsPerPage]);

  const pageCount = Math.ceil(data.length / itemsPerPage);

  const handlePageClick = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  return (
    <div className="paginated-data-container">
      <h2>Paginated Data</h2>
      <ul className="data-list">
        {displayData.map((item) => (
          <li>{item.name}</li>
        ))}
      </ul>

      <ReactPaginate
        previousLabel={'Previous'}
        nextLabel={'Next'}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        activeClassName={'active'}
      />
    </div>
  );
};

export default Pagination;