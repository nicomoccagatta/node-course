// const countryInfo = require("../country-info");
// En lugar de incluír acá el módulo "country-info", fuerzo a que lo pasen por parámetro.
// Esto permite que sea fácilmente testeable ya que puedo pasar un objecto "mockeado" de countryInfo.
// Patrón: dependency injection, inversion of control.

let checkResponse = {};
checkResponse = (res) => {
  return (res && res.code && res.name) ? res : null;
};

module.exports = (countryInfo) => {

  function getByCode(code) {
    return new Promise((response, reject) => {
      countryInfo.getCountryInfo(code, (err, res) => {
        if (err) {
          return reject(err);
        }
        return response(checkResponse(res));
      });
    });
  }

  function getByName(name) {
    return new Promise((response, reject) => {
      countryInfo.getCountryInfoByName(name, (err, res) => {
        if (err) {
          return reject(err);
        }
        return response(checkResponse(res));
      });
    });
  }
  
  return {
    getByCode,
    getByName
  };
};
