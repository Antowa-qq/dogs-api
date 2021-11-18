import React, { useState, useEffect } from 'react';
import { Container, Stack, Grid, Button } from '@mui/material';
import { Table, Loader, Pagination, Search, Filter } from '../../components';
import { getAllDogs } from '../../api/getAllDogs';
import { getAllBreeds } from '../../api/getAllBreeds';

const headCellsTable = [
  { id: 'image', label: 'Картинка' },
  { id: 'title', label: 'Заголовок' },
  { id: 'breed', label: 'Порода' },
];

function Dogs() {
  const [query, setQuery] = useState({ page: 1, amount: 5, title: '', breed: null });
  const [data, setData] = useState({ breeds: [], dogs: [], countAll: 0 });
  const [loading, setLoading] = useState(true);

  const handleClickChangePage = async (page) => {
    setLoading(true);
    setQuery({ ...query, page });
    const { dogs, countAll } = await getAllDogs({ ...query, page });
    setData({ ...data, dogs, countAll });
    setLoading(false);
  };

  const handleClickSearch = async (e) => {
    setLoading(true);
    e.preventDefault();
    setQuery({ ...query, page: 1 });
    const { dogs, countAll } = await getAllDogs({ ...query, page: 1 });
    setData({ ...data, dogs, countAll });
    setLoading(false);
  };

  const handleChangeFilterBreed = (value) => {
    setQuery({ ...query, breed: value });
  };

  const handleChangeSearchDogTitle = (value) => {
    setQuery({ ...query, title: value });
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const { dogs, countAll } = await getAllDogs({ ...query });
      const { breeds } = await getAllBreeds();
      setData({ ...data, dogs, breeds, countAll });
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <Container>
      {loading && <Loader />}
      <Stack spacing={2} justifyContent="center" alignItems="center" display="flex">
        <Grid container direction="row" justifyContent="center" spacing={1}>
          <Grid item>
            <Search
              value={query.title}
              handleChange={(value) => {
                handleChangeSearchDogTitle(value);
              }}
            />
          </Grid>
          <Grid item>
            <Filter
              data={data.breeds}
              handleChange={(value) => {
                handleChangeFilterBreed(value);
              }}
            />
          </Grid>
          <Grid item>
            <Button
              sx={{ border: '1px solid whitesmoke', height: '34px' }}
              onClick={(e) => {
                handleClickSearch(e);
              }}>
              Search
            </Button>
          </Grid>
        </Grid>

        <Table headers={headCellsTable} data={data.dogs} />
        <Pagination
          page={query.page}
          count={Math.ceil(data.countAll / query.amount)}
          handleChange={(e, p) => {
            handleClickChangePage(p);
          }}
        />
      </Stack>
    </Container>
  );
}

export default Dogs;
