const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const data = [];

app.post('/insertData', (req, res) => {
  const item = req.body.item;
  data.push(item);
  res.send('Data inserted successfully!');
});

app.get('/fetchData', (req, res) => {
  res.send(data);
});

app.listen(3003, () => {
  console.log('Data Service listening on port 3003');
});
