//= require cpf_validator

describe("CpfValidator", function () {
  describe("checking when a number is valid cpf", function () {
    it("returns false when a invalid numer was given", function () {
      var validator = new CpfValidator("12312312312");

      expect(validator.isValid()).to.be.false
    });

    it("returns true when a invalid numer was given", function () {
      var validator = new CpfValidator("78088398339");

      expect(validator.isValid()).to.be.true
    });
  });
});
