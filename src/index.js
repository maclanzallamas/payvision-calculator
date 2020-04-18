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
    if (resultNum) {
      // If a result was displayed, reset number
      currentNum = this.getAttribute("data-num");
      resultNum = "";
    } else {
      // Otherwise, add digit to previous number (this is a string!)
      currentNum += this.getAttribute("data-num");
    }

    viewer.innerHTML = currentNum; // Display current number
  };

  // When: Operator is clicked. Pass number to oldNum and save operator
  var moveNum = function() {
    oldNum = currentNum;
    currentNum = "";
    operator = this.getAttribute("data-ops");

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
})();