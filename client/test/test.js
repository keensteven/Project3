var chai = require("chai");
var saveUser = require('../src/utils/API.jsx').saveUser;

describe('Save user', () => {
    it("Should return an error if userData is not provided", () => {
        chai.expect(saveUser()).to.throw(Error);
    });
})