import React from 'react';
import { InputBase, IconButton } from '@mui/material';
import {  Clear } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  search: {
    width: 300,
    border: '1px solid whitesmoke',
    borderRadius: '4px',
    height: 32,
    display: 'flex',
    paddingRight: '4px',
    alignItems: 'center',
    '& input': {
      fontSize: '14px',
    },
  },
  input: {
    padding: '8px',
    width: '100%',
    fontSize: '14px',
  },
}));

function Search({ value, handleChange }) {
  const classes = useStyles();

  return (
    <div className={classes.search}>
      <div className={classes.input}>
        <InputBase
          fullWidth
          value={value}
          placeholder="Dog title"
          onChange={(e) => {
            handleChange(e.target.value);
          }}
        />
      </div>
      <IconButton
        sx={{ p: '4px' }}
        onClick={() => {
          handleChange('');
        }}>
        <Clear color="primary" sx={{ fontSize: '20px' }} />
      </IconButton>
    </div>
  );
}

export default Search;
