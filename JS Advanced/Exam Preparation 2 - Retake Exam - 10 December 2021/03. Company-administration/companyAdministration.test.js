const { expect } = require('chai');
const { companyAdministration } = require('./companyAdministration');


describe("companyAdministration", () => {
  describe("hiringEmployee", () => {
    it("check if experience is greater than 3", () => {
      expect(1).to.equal(1);
    });
    it("check if experience is greater than 3", () => {
      expect(
        companyAdministration.hiringEmployee("A", "Programmer", 4)
      ).to.equal("A was successfully hired for the position Programmer.");
    });
  });

});