const { fetchMyIP } = require('./iss');
const { fetchCoordsByIP } = require('./iss');

let ipv4 = '';

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  ipv4 = ip;
  // console.log('It worked! Returned IP:' , ip);
});



fetchCoordsByIP(ipv4, (error, data) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  console.log("geo-location:", data);
});
