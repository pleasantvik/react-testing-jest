# Husky

- This is a tool that helps improve commits

# Installation

```
   npx husky-init && npm install
or
      npx husky-init && npm yarn
```

- With husky, developers cannot commit code with linting errors

- # pre-push
- This ensure we are only able to push when all code pass

```
 npx husky add .husky/pre-push "npm test -- --watchAll=false"
```
