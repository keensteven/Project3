import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import chai from 'chai';
import API from './utils/API'

describe('Save user', () => {
  it("Should return an error if userData is not provided", () => {
      chai.expect(() => API.saveUser()).to.throw(Error);
  });
})