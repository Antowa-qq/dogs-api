import React, { useState, useEffect } from 'react';
import { Loader } from './components';

import { Dogs } from './pages';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);
  
  return (
    <>
      {loading && <Loader />}
      {!loading && <Dogs />}
    </>
  );
}

export default App;
