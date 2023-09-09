# First test

- We need the test function to run our test. It takes three args

- test name to identify the test
- 2. A func that contains the expectation to test: This contains what we want to test
     - In the function we do the folowing
     1. create a virtual dom with of the component we are trying to test with the render method
        -> e.g render(<Greet/>)
  3. Check if what we want to test exist in the component. we use the screen method for this

3.  time out to specify how long before test is abolished. This is optional. default timer is 5secs

# What to test

- Test that the component render
- Test component renders with props
- Test compoennt render in different state: e.g login button shu render if user is logout

- Test components reaction to events

# 17- RTL QUERIES

- All written test has 3 basic ingredient

  - 1.  Render the component
        - Use the render method
  - 2.  Find an element rendered by the component

  - 3.  Assert against the element found in step2 which pass or fail the test
        - We use the expect alongside a matcher function from jest or jest-dom

# Queries are method testing libraries provide to find elememnt on the page

- To find single elememnt

- getBy: return mathcing node for a query and throw erro if no query is found or more than one query os found
- queryBy
- findBy
- To find multiple elememnt

- getAllBy
- queryAllBy
- findAllBy

- This has suffx such as Role, LabelText, PlaceHolderText, Text,DisplayValue, AltText, Title, TestId

# getByRole

- Provide query for elemnts with given role

- Role refers to the ARIA(Accessible Rich Internet Application) role which provides semnatic meaning to content to ensure people using assitive technologies are able to use them

# HTML elemnts and theor role

- button : button
- h1-h6 : heading
- checkbox: checkbox
- radio: radio
- a : link

# Getting the role of HTML element

- testing-library.com -> Docs -> Queries -> byRole

# getByDisplayValue

- This returns the input textarea or selct elment having the matching display value

# getByAltText

It returns the element with the given alt text.
