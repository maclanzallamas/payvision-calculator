# Payvision calculator

### 1. Code review

- Index.html does not have the basic html structure (html, head and body tags)
- Numbers 0 and 3 are misplaced. They should be interchanged
- Plus and minus functionalities are also the other way around
- Use meaningful names for the variables. For example "theNum" should be called "currentNumber", this way you don't need to write the comment next to it, as the variable will be self explanatory.
- Only use meaningful and needed comments. the comment to say that variable resultNum is the result is not needed as the variable is self explanatory. The comment "Batman" does not mean anything!
- The '&' in css code is a sass functionality, and in pure css you just need to duplicate the class name.

Refactor:
- Divide html, css and js in different files for better structure
- Remove duplicate after selector in calculator class in CSS

Improvements:
- ~~If we are always treating with numbers, why create oldNum and theNum variables as strings? We can use numbers and that way we do not need to use parsers.~~ I later realized that we are using strings so we can concatenate numbers in the viewer component!
- If you want to support IE8 use only one colon for the pseudo-selectors after and before in CSS

### 2. Testing and bug fixing

Fixed the bugs:
 - Mixed 0 and 3 numbers
 - Mixed - and + operators
 - SCSS syntax in css file
 - broken animation is moving the calculator too far away and making it invisible

### 3. New features implementation

- Implemented multiply and divide operations
- Updated version in package json with 1.3.0. The second digit indicates that we have made a release with new features that does not have breaking changes. Last digit would be used when fixing bugs, and the first digit for mayor releases with breaking changes.

### 4. Test automation

For this specific case I would implement Unit tests, which are the easiest to implement. As this application does not need integration with an API, integration test here doesnt make much more sense.

In particular I would implement 2 kind of units tests:
- Plain Javascript functions tests. For this we would need to first refactor de code to extract the operator functions outside (as now they are inside functions that modify the DOM).
- Functions that modify the DOM. We can do units test that mock a click from a user and check what the output is. I have implemented a set of tests, it is just basic. If we wanted to extend this a little bit more and make sure we have a complete coverage, I would randomize what the users clicks, so we can have a different possibility of outputs, which will make our test much more reliable.

### 5. UI/UX design

Do you consider yourself a good designer or UI/UX developer?

- Improve the UI/UX to be more user friendly.

Feel free to do any changes. Show us what you are capable to!

**Bonus:**

1. Configure the application to allow use of keyboard numpad.

## How to run the application using local server

To run the project, open a terminal and execute the following command from project root path:

- Install depencencies:

> yarn

- Run the application

> yarn serve

This command will run a local web server in port 8082:
[http://localhost:8082/src/index.html](http://localhost:8082/src/index.html)
