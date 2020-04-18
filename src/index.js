(function() {
  // Shortcut to get elements
  var el = function(element) {
    if (element.charAt(0) === "#") {
      // If passed an ID...
      return document.querySelector(element); // ... returns single element
    }

    return document.querySelectorAll(element); // Otherwise, returns a nodelist
  };

  // Variables
  var viewer = el("#viewer"), // Calculator screen where result is displayed
    equals = el("#equals"), // Equal button
    nums = el(".num"), // List of numbers
    ops = el(".ops"), // List of operators
    currentNum = "", // Current number
    oldNum = "", // First number
    resultNum,
    operator;

  // When: Number is clicked. Get the current number selected
  var setNum = function() {
    let value = "";
    try {
      value = this.getAttribute("data-num");
    } catch (error) {
      //This means the function was called using the keyboard
      value = this.event.key;
    }

    if (resultNum) {
      // If a result was displayed, reset number
      currentNum = value;
      resultNum = "";
    } else {
      // Otherwise, add digit to previous number (this is a string!)
      currentNum += value;
    }

    viewer.innerHTML = currentNum; // Display current number
  };

  // When: Operator is clicked. Pass number to oldNum and save operator
  var moveNum = function() {
    let valueOperator = "";
    try {
      valueOperator = this.getAttribute("data-ops");
    } catch (error) {
      //This means the function was called using the keyboard
      switch (this.event.key) {
        case "-":
          valueOperator = "minus";
          break;
        case "+":
          valueOperator = "plus";
          break;
        case "/":
          valueOperator = "divide";
          break;
        case "*":
          valueOperator = "multiply";
          break;
      
        default:
          break;
      }
      
    }
    oldNum = currentNum;
    currentNum = "";
    operator = valueOperator;

    equals.setAttribute("data-result", ""); // Reset result in attr
  };

  // When: Equals is clicked. Calculate result
  var displayNum = function() {
    // Convert string input to numbers
    oldNum = parseFloat(oldNum);
    currentNum = parseFloat(currentNum);

    // Perform operation
    switch (operator) {
      case "plus":
        resultNum = oldNum + currentNum;
        break;

      case "minus":
        resultNum = oldNum - currentNum;
        break;

      case "multiply":
        resultNum = oldNum * currentNum;
        break;

      case "divide":
        resultNum = oldNum / currentNum;
        break;

      // If equal is pressed without an operator, keep number and continue
      default:
        resultNum = currentNum;
    }

    // If NaN or Infinity returned
    if (!isFinite(resultNum)) {
      if (isNaN(resultNum)) {
        // If result is not a number; set off by, eg, double-clicking operators
        resultNum = "You broke it!";
      } else {
        // If result is infinity, set off by dividing by zero
        resultNum = "Look at what you've done";

        // Changed the broken animation
        const element = el("#calculator");
        element.classList.remove("broken-animation");
        void element.offsetWidth; // For restarting the application I have used this method: https://css-tricks.com/restart-css-animation/#article-header-id-0
        element.classList.add("broken-animation");
      }
    }

    // Display result, finally!
    viewer.innerHTML = resultNum;
    equals.setAttribute("data-result", resultNum);

    // Now reset oldNum & keep result
    oldNum = 0;
    currentNum = resultNum;
  };

  // When: Clear button is pressed. Clear everything
  var clearAll = function() {
    oldNum = "";
    currentNum = "";
    viewer.innerHTML = "0";
    equals.setAttribute("data-result", resultNum);
  };

  /* The click events */

  // Add click event to numbers
  for (var i = 0, l = nums.length; i < l; i++) {
    nums[i].onclick = setNum;
  }

  // Add click event to operators
  for (var i = 0, l = ops.length; i < l; i++) {
    ops[i].onclick = moveNum;
  }

  // Add click event to equal sign
  equals.onclick = displayNum;

  // Add click event to clear button
  el("#clear").onclick = clearAll;

  // Add listener to the whole page to enable use of keyboard
  document.addEventListener('keyup', function(event) {
    if (event.key.match(/[0-9.]/g)) { // Regex to only mach single digits 0 to 9
      setNum()
    }
    if (event.key.match(/[+-/*]/g)) { // Regex to only match operators
      moveNum()
    }
    if (event.key === "=") {
      displayNum()
    }
    if (event.key === "Delete") {
      clearAll()
    }
  });
})();