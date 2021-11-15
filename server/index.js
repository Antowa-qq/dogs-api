const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 9000;

app.use(cors());
app.use(express.json());
// app.use('/', router);

const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();

module.exports = app;
