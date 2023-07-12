const { Given, When, Then } = require('cucumber');
const { expect } = require('chai');
const axios = require('axios');

let requestPayload;
let response;

Given('the room size is {int}, {int}', function (x, y) {
  requestPayload = { roomSize: [x, y] };
});

Given('the hoover is initially at {int}, {int}', function (x, y) {
  requestPayload.coords = [x, y];
});

Given('there are patches of dirt at {string}', function (patches) {
  requestPayload.patches = JSON.parse(patches);
});

When('the hoover follows the instructions {string}', async function (instructions) {
  requestPayload.instructions = instructions;
  response = await axios.post('http://localhost:8080/v1/cleaning-sessions', requestPayload);
});

Then('the final coordinates should be {int}, {int}', function (x, y) {
  const expectedCoords = [x, y];
  expect(response.data.coords).to.deep.equal(expectedCoords);
});

Then('the number of cleaned patches should be {int}', function (numPatches) {
  expect(response.data.patches).to.equal(numPatches);
});
