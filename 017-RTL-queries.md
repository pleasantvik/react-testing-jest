# RTL QUERIES

- Our test follows this basic ingredient
- 1. Render the component
- 2. Find an element render by the compoennt
- 3. Assert against the element in step 2 passes or fail

# Queries

- This are methods that Testing libraries provides to help us find elements on the page

## Single elements

- For single elements we use
-       - 1. getBy
        - 2. queryBy
        - 3. findBy

## Multiple elements

- For multiple elements we use
-       - 1. getAllBy
        - 2. querAllyBy
        - 3. findAllBy

- Note: the suffix to this queries include Role, LabelText, PlaceHolderText, Text, DisplayValue, AltText, Title and TestId

# getBy... queries

- This class of queries return the matching node for a query, and throws a descriptive error if no elements match or if more than one match is found.
