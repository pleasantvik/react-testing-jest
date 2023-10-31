# First test

- We need the test function to run our test. It takes three args

- test name to identify the test
- 2. A func that contains the expectation to test: This contains what we want to test
     - In the function we do the folowing
     1. create a virtual dom with of the component we are trying to test with the render method
        -> e.g render(<Greet/>)
  3. Check if what we want to test exist in the component. we use the screen method for this
  4. Use the `expect` method from JEST to test the assertion (NB: Assertion is what we want to find out if they occur in the component)

3.  time out to specify how long before test is abolished. This is optional. default timer is 5secs
