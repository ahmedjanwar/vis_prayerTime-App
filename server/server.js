const express = require('express');
const app = express();

app.get('/api/data', (req, res) => {
  // Read the data from the JSON file
  const data = require('./data.json');
  
  // Get the current date
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const yyyy = today.getFullYear();
  const currentDate = yyyy + '-' + mm + '-' + dd;

  // Filter the JSON data based on the current date
  const filteredData = data.filter(element => element.Date === currentDate);
  
  // Send the filtered data as the response
  console.log(filteredData[0]['Hijri Date']);
  res.json(filteredData);
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
