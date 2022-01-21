const request = require('request');


const fetchISSFlyOverTimes = function(coords, callback) {
  request(`https://iss-pass.herokuapp.com/json/?lat=${coords["latitude"]}&lon=${coords["longitude"]}`, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }

    if (response.statusCode !== 200) {
      callback(Error(`Status Code ${response.statusCode} when requesting info: ${body}`), null);
      return;
    }

    const data = JSON.parse(body);

    if (data["response"] === undefined) {
      callback("No data found", null);
    }

    callback(null, data["response"]);
  });
};


module.exports = { fetchISSFlyOverTimes };