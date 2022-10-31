import React from "react";

const Pagination = ({ paginate, handlePrevious, handleNext, pageNumber }) => {
  let pageNumbers = [];
  for (let i = 1; i <= 10; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      <button
        disabled={pageNumber === 1 ? true : false}
        onClick={(event) => handlePrevious(event)}
      >
        Previous
      </button>
      <nav>
        <ul className="pages">
          {pageNumbers.map((number) => (
            <li key={number} className="page_item">
              <button onClick={() => paginate(number)}>{number}</button>
            </li>
          ))}
        </ul>
      </nav>
      <button
        disabled={pageNumber === 10 ? true : false}
        onClick={(event) => handleNext(event)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
