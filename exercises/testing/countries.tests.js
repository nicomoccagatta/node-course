const countryInfo = require("../country-info"),
  countries = require("./countries")(countryInfo),
  expect = require("chai").expect,
  sinon = require("sinon");

describe("countries tests", () => {

  context("unit", () => {
  
    describe("success cases", () => {

      it("getByCode() should call countryInfo.getCountryInfo() with given country code and return data", () => {
        
      });

      it("getByCode() should return null when countryInfo.getCountryInfo() doesn't return a valid response", () => {
        
      });

      it("getByName() should call countryInfo.getCountryInfoByName() with given country name and return data", () => {
        
      });

      it("getByName() should return null when countryInfo.getCountryInfoByName() doesn't return a valid response", () => {
        
      });

    });

    describe("error cases", () => {
      
      it("getByCode() should reject with the error given by countryInfo.getCountryInfo()", () => {
        
      });

      it("getByName() should reject with the error given by countryInfo.getCountryInfoByName()", () => {
        
      });

    });

  });

  context("integration", () => {

    it("getByCode() should get the name of the country 'AR'", () => {
      
    });

    it("getByCode() should return null when a country is not found", () => {
      
    });

    it("getByName() should get the code of the country 'Argentina'", () => {
      
    });

    it("getByName() should return null when a country is not found", () => {
      
    });

  });

});
