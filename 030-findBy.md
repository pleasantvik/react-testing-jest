# findBy

## Appearnce / Disappearance of HTML elements

- Sometimes elements are not present in the DOm at inception but make their way into the DOM after some time.

- examples are data fetched from a server that will be render after a few seconds

# findBy

- In querying for appearing or disappearing HTML element we use the findBy method.
- findBy returns a promise which resolves when an element is found which matches the given query
- The promise is rejected if no element is found or if more than one element is found after a default timeout of 1000ms

# findAllBy

- It returns a promise which resolves to an array of elemnets when an element is found which matches the given query
- The promise is rejected if no element is found or if more than one element is found after a default timeout of 1000ms

# Note: the default timeout can be overwritten by passing a third argument to the findBy method {timeout: 2000}. The key is timeout and the value is amount of time we want to wait

# logRoles

- To print out all the list of roles in the DOM tree.
- We import logRoles from the testing library
- save the render into a variable
- call the logROle by passing in the variable

```
 const view = render(<Skill skills={skills} />);
    logRoles(view.container);
```

` const view = render(<Skill skills={skills} />);
    logRoles(view.container);`
