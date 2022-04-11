const getAllDogs = async ({ page, amount, title, breed }) => {
  try {
    const res = await fetch(
      `${process.env.REACT_APP_API_URL}/api/v1.0/dogs?page=${page}&amount=${amount}&title=${title}&breed=${breed}`,
      {
        method: 'GET',
      },
    );

    const {
      payload: { dogs, countAll },
    } = await res.json();

    return { dogs, countAll };
  } catch (e) {
    return { dogs: [], countAll: 0 };
  }
};

export { getAllDogs };
