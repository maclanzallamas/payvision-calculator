const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../src/index.html'), 'utf8');

describe('calculator tests', function () {
  beforeEach(() => {
      document.documentElement.innerHTML = html.toString();
      require('../src/index');
  });

  afterEach(() => {
      // restore the original state after test
      jest.resetModules();
  });

  it('setNum function. Should display a 9', function () {
    const viewer = document.getElementById('viewer');
    // We get the first element with that id, in this case, the button with value 9
    const nineButton = document.getElementById('btn');

    // We simulate the user clicking the button
    nineButton.click();
  
    expect(viewer.innerHTML).toBe('9');
  });

  it('moveNum function. Adding 2 numbers', function () {
    const viewer = document.getElementById('viewer');
    // We get the first element with that id, in this case, the button with value 9
    const nineButton = document.getElementById('btn');
    const operatorButtons = document.getElementsByClassName('ops');
    const addButton = operatorButtons[0];
    const equalButton = document.getElementById('equals');

    // We simulate the user clicking the buttons
    nineButton.click();
    addButton.click();
    nineButton.click();
    equalButton.click();
    
    expect(viewer.innerHTML).toBe('18');
  });

  it('moveNum function. Subtracting 2 numbers', function () {
    const viewer = document.getElementById('viewer');
    // We get the first element with that id, in this case, the button with value 9
    const nineButton = document.getElementById('btn');
    const operatorButtons = document.getElementsByClassName('ops');
    const minusButton = operatorButtons[1];
    const equalButton = document.getElementById('equals');

    // We simulate the user clicking the buttons
    nineButton.click();
    minusButton.click();
    nineButton.click();
    equalButton.click();
    
    expect(viewer.innerHTML).toBe('0');
  });
});