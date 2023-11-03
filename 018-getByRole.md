# getByRole queries

- This queries for elements with the given role.

## WHat is Role

- This refers to the ARIA(Accessible Rich Internet Applications) role which provides semantic meaning to content to ensure people using assitive technologies are able to use them

- Many semantic html elements have a role
-       - 1. button: button role
        - 2. anchor: link role
        - 3. h1-h6: heading role
        - 4. checkbox: checkbox role
        - 5. radio: radio roles
        - 6. input: textbox role
        - 7. select: combobox role

# Options to getByRole

- It can take a second object argument. the key is name and the value is the accesible name for the element

- Note: the accesible name is for simple cases which include
-        - 1. the label of a form element
         - 2. the text content of a button
         - 3. the vaue of aria-label attribute

- Note: Other options that can be used with getByRole include
-       - 1. name
        - 2. level: for h1-h6
        - 3. hidden
        - 4. selected
        - 5. checked
        - 6. pressed
