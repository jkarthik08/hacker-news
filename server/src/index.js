import express from 'express';
const app = express();
import render from './renderer.jsx';
import {
  getData
} from './client/services/http';

app.use(express.static('public'));

app.get('/story', (req, res) => {
  var query = req.query;
  getData(query).then(results => {
    res.send(render(results.data));
  });
});

app.get('/', function (req, res) {
  res.redirect('/story');
});

app.get('*', function (req, res) {
  res.status(404).send('PAGE NOT FOUND');
});

app.listen(3000, () => {
  console.log('Hacker news listening in 3000...');
})
