const request = require("request");

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=pk.eyJ1IjoiemFpbnphZmFyOTAiLCJhIjoiY2s5bDQzMHBvMDJsaTN0cW5kZG45bWZ1NCJ9.w4VD2E-7gNbFE40eWgGSeQ`;

  request({ url, json: true }, (err, res) => {
    if (err) {
      callback("Unable to connect to location services.");
    } else if (res.body.features.length === 0) {
      callback("Unable to find location. Try another search.");
    } else {
      callback(undefined, {
        latitude: res.body.features[0].center[1],
        longitude: res.body.features[0].center[0],
        location: res.body.features[0].place_name,
      });
    }
  });
};

module.exports = geocode;
