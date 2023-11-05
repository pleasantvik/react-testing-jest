// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

import { server } from "./mock/server";
// Establish API mocking before all test.
// beforeAll(() => server.listen());
// // Reset any request handlers that we may add during the tes so they don't affect other tests.
// afterEach(() => server.resetHandlers());

// // Cleanup after the test are finished
// afterAll(() => server.close());
