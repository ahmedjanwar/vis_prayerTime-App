const express = require('express');
const app = express();

app.get('/api/data', (req, res) => {
  // Read the data from the JSON file
  const data = require('./data.json');
  // Send the JSON data as the response
  res.json(data);
  
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
