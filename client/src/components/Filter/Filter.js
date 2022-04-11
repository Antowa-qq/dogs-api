import React from 'react';
import { Autocomplete, TextField } from '@mui/material';

function Filter({ data, handleChange }) {
  return (
    <Autocomplete
      disablePortal
      options={data}
      onChange={(e, value) => {
        handleChange(value?._id || null);
      }}
      getOptionLabel={(option) => option.title}
      sx={{
        width: 300,
        '& .MuiInputBase-root': {
          minHeight: 32,
          padding: '0px',
          fontSize: '14px',
          pl: '8px',
          '& fieldset': {
            border: 'none',
          },
          '& input.MuiOutlinedInput-input.MuiInputBase-input': {
            padding: '0px',
          },
          '& svg': {
            color: '#1976d2',
          },
        },
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="outlined"
          placeholder="Breed"
          sx={{ border: '1px solid whitesmoke', borderRadius: '4px' }}
        />
      )}
    />
  );
}

export default Filter;
