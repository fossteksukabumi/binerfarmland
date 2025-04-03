import React from "react";
import { PaginationContainer, PageButton } from "./Pagination.style";

const Pagination = ({ totalProducts, productsPerPage, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  return (
    <PaginationContainer>
      {Array.from({ length: totalPages }, (_, i) => (
        <PageButton key={i + 1} active={currentPage === i + 1} onClick={() => onPageChange(i + 1)}>
          {i + 1}
        </PageButton>
      ))}
    </PaginationContainer>
  );
};

export default Pagination;
