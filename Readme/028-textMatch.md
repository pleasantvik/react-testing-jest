# TextMatch

- This is the type for the first argument passed into the query

- const listEl = screen.getByRole("list");

**example**

- The type of the argument (list) can be one of the following
-       - 1. string
        - 2. regex
        - 3. function

# string

- <div>Hello world</div>
- screen.getByText('Hello world) // full string match
- screen.getByText('llo world, {exact:false}) // substring match
- screen.getByText('hello world, {exact:false}) // ignore case

# regex

- screen.getByText(/world/) // substring match
- screen.getByText(/world/i) // substring match, ignore case
- screen.getByText(/^hello world$/i) // full string match, ignore case

# Function

- TextMatch function argument is as follow
- (content?:string, element?:Element | null) => boolean

- screen.getByText((content)=> content.startsWith("Hello")) // substring match
