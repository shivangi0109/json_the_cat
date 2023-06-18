const request = require('request');

const breed = process.argv[2];

if (!breed) {
  console.log('Please provide a breed name as a command-line argument.');
  process.exit(1);
}

const breedSearchURL = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

request(breedSearchURL, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Siberian breed from the API endpoint using request.
  console.log(typeof body); // ypeof would tell us that data is a string
  const data = JSON.parse(body); // Let's use JSON.parse to convert the JSON string into an actual object
  console.log(data);
  console.log(typeof data); // typeof would now tell us that data is an object
  if (data.length > 0) {
    const firstBreed = data[0];
    console.log(firstBreed.description);
  } else {
    console.log('Breed not found.');
  }
});