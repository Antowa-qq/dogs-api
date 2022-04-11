import React from 'react';
import { Pagination as PaginationMui } from '@mui/material';

function Pagination({ page, count, handleChange }) {
  return <PaginationMui count={count} color="primary" page={page} onChange={handleChange} />;
}

export default Pagination;
