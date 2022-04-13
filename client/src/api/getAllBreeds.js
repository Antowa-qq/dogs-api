const getAllBreeds = async () => {
  try {
    const res = await fetch(
      `${process.env.REACT_APP_API_URL}/api/v1.0/breeds`,
      {
        method: 'GET',
      }
    );

    const {
      payload: { breeds },
    } = await res.json();

    return { breeds };
  } catch (e) {
    return { breeds: [] };
  }
};

export { getAllBreeds };
export { getAllBreeds };
