const initialDB = async () => {
  try {
    await fetch(`${process.env.REACT_APP_API_URL}/api/v1.0/initial`, {
      method: 'GET',
    });
    return {};
  } catch (e) {
    return {};
  }
};

export { initialDB };
