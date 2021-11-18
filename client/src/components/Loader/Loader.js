import React from 'react';
import { CircularProgress, Backdrop } from '@mui/material';

function Loader() {
  return (
    <Backdrop open={true} sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 9999 }}>
      <CircularProgress color="primary" />
    </Backdrop>
  );
}

export default Loader;
