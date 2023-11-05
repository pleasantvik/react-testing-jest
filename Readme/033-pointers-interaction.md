# Pointer interaction

- In testing user interaction we follow the steps
-       - 1. import user from @/testing-library/user-events
        - 2. Before the render  create an instance of user event by calling user.setup()
        - 3. after finding the button the user will clikc on, await user.click(pass the btn here)
        - 4. do the assertion

# Note

- Click it's a convenience API that we use in writing test. It calles the pointer APi

# Convenience API include

- click
- dblClick
- tripleClick
- hover
- unhover

# Pointers API
