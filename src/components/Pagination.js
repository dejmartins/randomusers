import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Pagination = ({ paginate, handlePrevious, handleNext, pageNumber }) => {
  let pageNumbers = [];
  for (let i = 1; i <= 10; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      <button
        className="direction"
        disabled={pageNumber === 1 ? true : false}
        onClick={(event) => handlePrevious(event)}
      >
        <FiChevronLeft size={20} />
      </button>
      <nav>
        <ul className="pages">
          {pageNumbers.map((number) => (
            <li key={number} className="page_item">
              <button
                onClick={() => paginate(number)}
                style={
                  pageNumber === number ? { backgroundColor: "gainsboro" } : {}
                }
              >
                {number}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <button
        className="direction"
        disabled={pageNumber === 10 ? true : false}
        onClick={(event) => handleNext(event)}
      >
        <FiChevronRight size={20} />
      </button>
    </div>
  );
};

export default Pagination;
