const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=046419de5cc3689826348f3be566ade4&query=${latitude},${longitude}&units=f`;

  request({ url, json: true }, (err, res) => {
    if (err) {
      callback("Unable to connect to location services.");
    } else if (res.body.error) {
      callback("Unable to find location. Try another search.");
    } else {
      callback(
        undefined,
        `It is currently ${res.body.current.temperature} degrees and feels like ${res.body.current.feelslike}.`
      );
    }
  });
};

module.exports = forecast;
