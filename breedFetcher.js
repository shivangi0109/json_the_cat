const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const breedSearchURL = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(breedSearchURL, (error, response, body) => {
    if (error) {
      callback(error, null);
    } else {
      const data = JSON.parse(body);
      if (data.length > 0) {
        const firstBreed = data[0];
        callback(null, firstBreed.description);
      } else {
        callback('Breed not found.', null);
      }
    }
  });
};

module.exports = { fetchBreedDescription };