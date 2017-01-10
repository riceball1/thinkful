const express = require('express');
const router = express.Router();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const blogRouter = require('./blogRouter');

const jsonParser = bodyParser.json();
const app = express();

// log the http layer
app.use(morgan('common'));

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

/* when requests comes into /blog-api
 we'll route them to the express router instance
 These router instances act as modular, mini-express apps.
*/
app.use('/blog-posts', blogRouter);

app.listen(process.env.PORT || 8080, () => {
  console.log(`Your app is listening on port ${process.env.PORT || 8080}`);
});
