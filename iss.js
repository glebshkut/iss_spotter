const request = require('request');

/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */
const fetchMyIP = function(callback) {
  request('https://geo.ipify.org/api/v2/country?apiKey=at_s2dJh6jLkclKv3mDnibPdlVTIL61X', (error, response, body) => {
    
    if (error) return callback(error, null);


    if (response.statusCode !== 200) {
      callback(Error(`Status Code ${response.statusCode} when fetching IP: ${body}`), null);
      return;
    }
    
    const data = JSON.parse(body);

    callback(error, data.ip);
  });
};

const fetchCoordsByIP = function(ip, callback) {
  request(`https://api.freegeoip.app/json/${ip}?apikey=0b19ce40-7a3e-11ec-8cf9-616e8b2f4f3b`, (err, resp, body1) => {

    if (resp.statusCode !== 200) {
      callback(Error(`Status Code ${resp.statusCode} when fetching IP: ${body1}`), null);
      return;
    }


    const data1 = JSON.parse(body1);
    const latitude = data1["latitude"];
    const longitude = data1["longitude"];

    callback(err, {latitude, longitude});
  });
};

module.exports = { fetchMyIP, fetchCoordsByIP};