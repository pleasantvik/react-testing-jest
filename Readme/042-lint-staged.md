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

- # pre-push
- This ensure we are only able to push when all code pass

```
 npx husky add .husky/pre-push "npm test -- --watchAll=false"
```
