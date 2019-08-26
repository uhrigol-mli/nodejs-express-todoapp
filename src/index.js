import app from './server';

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Your app now is running on port ${port}`); // eslint-disable-line
});
