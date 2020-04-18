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

### 3. New features implementation

Our product owner required us new features for this application. We would like the application new version to support multiplications and divisions.

- Could you implement these new features?
- Bear in mind usage of git-flow to track your changes.
- Current version is 1.2.2 (see package.json version). Should we increase the version? How? Why?

### 4. Test automation

We would like to automate testing of this application.

- What kind of tests would you implement? Why?

**Bonus**: Implement the tests.

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
