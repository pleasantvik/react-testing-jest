# Lint-staged

- This runs linters and formatters against staged git files

# Installation

```
npm i -dev lint-staged
yarn add -D lint-staged
```

- Add lint-satged in packaged.json

```
"lint-staged": {
    "*.{ts,tsx}": ["eslint"]
}
```
