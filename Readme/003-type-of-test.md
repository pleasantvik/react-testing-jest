## TYPES OF TESTS

- Unit test
- integration test
- E2E test

# Unit test

- It focuses on testing the individual building blocks of an app, such as class, function or a component

- Each building block is test in isolation independent of other units
- Dependecies are mocked
- It runs in short amount of time and make it easy to pinpoint failures

# Integration

- Test combination of units and ensure they work together
- It takes time to finish

# E2E

- Test entire app rom start to finish
- It involves a real UI, real backend DB and services
- It has cost implication as we interact with real APIs that may charged based on the number of requests

# RTL Philosophy

- RTL strikes a balance between unit and E2E test
- The more your test resemble the way your software is used, the more confidence we have

- We test how components behave with user interaction

# What is automated test?

- A piece of code that throws error when the output doesnt match the expected output
