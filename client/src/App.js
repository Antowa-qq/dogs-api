import React, { useState, useEffect } from 'react';
import { Loader } from './components';
import { Dogs } from './pages';
import { initialDB } from './api/initialDB';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await initialDB();
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      {loading && <Loader />}
      {!loading && <Dogs />}
    </>
  );
}

export default App;
