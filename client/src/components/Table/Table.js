import React from 'react';
import {
  TableContainer,
  Table as TableMui,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
} from '@mui/material';

import { styled } from '@mui/material/styles';

const TableStyled = styled(TableMui)(({ theme }) => ({
  maxWidth: 750,
  margin: '0 auto',
  overflow: 'auto',
  '& td , & th': {
    borderBottom: '0.6px solid rgba(224, 224, 224, 1)',
  },
  '& th': {
    fontSize: '14px',
  },
  '& td': {
    fontSize: '12px',
  },
}));

function Table({ headers, data }) {
  return (
    <TableContainer>
      <TableStyled>
        <TableHead>
          <TableRow>
            {headers.map((headCell, index) => {
              return <TableCell key={`${headCell.label}+${index}`}>{headCell.label}</TableCell>;
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={`${row.title}+${index}`}>
              <TableCell>
                <img
                  src={row.image}
                  alt="breed"
                  style={{ width: '50px', height: '50px', objectFit: 'contain' }}
                />
              </TableCell>
              <TableCell>{row.title}</TableCell>
              <TableCell>{row.breed.title}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </TableStyled>
      {data && data.length === 0 && (
        <Typography variant="h5" align="center" padding="10px">
          Nothing found : (
        </Typography>
      )}
    </TableContainer>
  );
}

export default Table;
