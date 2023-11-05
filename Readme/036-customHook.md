# Testing customHook

- RTL provide us with the renderHook function. We import this instead of the render
- The renderHook returns an object witht the propert result. This can be destructured out

- The result contains a current property which holds all the object returned by the hook

```
  test("Should render initial count", () => {
    const { result } = renderHook(useCounter);

    expect(result.current.count).toBe(0);
  });
```

# Passing Argument

- argument is passed to custom hook by passing in a second optional argument that takes the initialProps

```
 test("should accept and render same initial count", () => {
    const { result } = renderHook(useCounter, {
      initialProps: {
        initialCount: 10,
      },
    });
    expect(result.current.count).toBe(10);
  });
```

# ACt utility

- This is a function that ensure state updates are process before assertion is made in test

- import the act from testing/library-react

```
  test("should increment the count", () => {
    const { result } = renderHook(useCounter);
    act(() => result.current.increment());
    expect(result.current.count).toBe(1);
  });
```
