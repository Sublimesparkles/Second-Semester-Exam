import React from 'react';
import "../styles/Pagination.css"

const Pagination = ({ page, setPage, reposPerPage, totalRepos }) => {
  const totalPages = Math.ceil(totalRepos / reposPerPage);

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };


  return (
    <section className='button_section'>
      <button onClick={handlePrevPage} disabled={page === 1} className='page_button'>
        Previous Page
      </button>
      <button onClick={handleNextPage} disabled={page >= totalPages} className='page_button'>
        Next Page
      </button>
    </section>
  );
};

export default Pagination;



