import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex items-center space-x-2">
      {/* Double left arrows */}
      <button
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
        className="text-gray-400 hover:text-black disabled:text-gray-300"
      >
        &lt;&lt;
      </button>

      {/* Single left arrow */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="text-gray-400 hover:text-black disabled:text-gray-300"
      >
        &lt;
      </button>

      {/* Page numbers */}
      {pageNumbers.slice(Math.max(0, currentPage - 3), Math.min(totalPages, currentPage + 2)).map((number) => (
        <button
          key={number}
          onClick={() => onPageChange(number)}
          className={`${
            number === currentPage ? 'text-black font-bold' : 'text-gray-400'
          } hover:text-black`}
        >
          {number}
        </button>
      ))}

      {/* Ellipsis */}
      {currentPage + 2 < totalPages && (
        <span className="text-gray-400">...</span>
      )}

      {/* Single right arrow */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="text-gray-400 hover:text-black disabled:text-gray-300"
      >
        &gt;
      </button>

      {/* Double right arrows */}
      <button
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
        className="text-gray-400 hover:text-black disabled:text-gray-300"
      >
        &gt;&gt;
      </button>
    </div>
  );
};

export default Pagination;
