import express from 'express';
import bookRoute from './route/bookRoute.js';

const app = express();

app.use(express.json());
app.use('/books', bookRoute);

app.get('/', (req, res) => {
  res.send('Books API');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on the port ${PORT}.`);
});
