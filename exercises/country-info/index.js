const fs = require("fs"),
  file = `${__dirname}/countries.json`;

function loadCountriesAndFind(finderFunc, cb) {
  fs.readFile(file, (err, data) => {
    if (err) {
      return cb(err, null);
    }
    const result = JSON.parse(data).find(finderFunc);
    return cb(null, result);
  });
}

module.exports = {
  getCountryInfo(code, cb) {
    return loadCountriesAndFind((obj) => obj.code === code, cb);
  },

  getCountryInfoByName(name, cb) {
    return loadCountriesAndFind((obj) => obj.name === name, cb);
  }
};