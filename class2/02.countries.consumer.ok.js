const countryInfo = require("../solved/country-info"),
  code = "AR",
  name = "Argentina";

countryInfo.getCountryInfo(code, (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`La data para '${code}' es:`, data);
  }
});

countryInfo.getCountryInfoByName(name, (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`La data para '${name}' es:`, data);
  }
});