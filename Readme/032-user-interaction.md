# User interaction

- We use a library called user-event

# user-event

- A library that simulates user interaction by dispatching the events that would happen if an interaction took place in the browser

# fireEvent

- an event from RTL which is used to dispacth DOM events

# Note: fire-event vs user-event

- user-event simulates full interactions which may fire multiple events and do additional checks along the way
- For exampla we can dispatch a chanfe eveent on an input field using freevnt
- When a user types into a textbox, the element has to be focused and the keyboard event are fires and the selection and value on the element are manipulated as thet are type

- User-event allow us define a user interaction. It adds visibility and interactivity check along the way and manipulates the DOM just like a user interaction in the browser would. It factors the fact that a user for example won't be able to type in a disabled textbox
