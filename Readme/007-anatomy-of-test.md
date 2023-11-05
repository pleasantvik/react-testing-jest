# Anatomy of Test

- test(name, fn,timeout)
  `
  test("render correctly", () => {
  render(<Greet />);
  const textElement = screen.getByText(/hello/i);

  expect(textElement).toBeInTheDocument();
  });
  `

- All we need to run a test is the test function
- It takes 3 arguemnts
  1. The name used to identify the test
  2. The anonymous function that contains the what to test
  3. The timeout function which specify how long to wait before emitting thr test

# Test file

- We import render and screen from the RTL
- The render is use to create a virtual DOM for the react component
- The screen contains the object to query the virtual DOM e.g getByText()
- Lastly we expect the content to be in the document

Note
Jest provide the test and expect method
