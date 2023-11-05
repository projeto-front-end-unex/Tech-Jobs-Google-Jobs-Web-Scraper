const fs = require('fs');

function saveToJSON(data, filename) {
  fs.writeFile('jobs/' + filename, JSON.stringify(data, null, 2), (error) => {
    if (error) {
      throw new Error('Something went wrong, JSON not saved');
    }
    console.log('Data saved to', filename);
  });
}

module.exports = {
  saveToJSON,
};
