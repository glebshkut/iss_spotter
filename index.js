const { fetchCoordsByIP } = require('./iss');

fetchCoordsByIP('24.80.168.75', (error, coordinates) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned coordinates:' , coordinates);
});