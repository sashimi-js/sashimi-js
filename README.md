# 🍣 sashimi.js

sashimi.js is a _full stack framework_ written in JavaScript.

It combines [several existing technologies](#Stack), and provides opinionated conventions on how to structure your application.

## Design Goals

- **Separation of Concerns:** Each high level app feature is isolated as its own separate concern.
- **Scaffolding** We provide sensible default implementations of common features (User accounts, media uploads, login/logout) which you can use right out-of-the-box or build upon to quickly structure your application.
- **No transpilation (by default)** We'll track the ECMAScript features available in LTS node, and will only use those on the framework (and on default concern implementations). You should expect any reasonably modern browser to handle the code output by sashimi.js, but you're free to enable

## Stack

- View Rendering (Web): **React**
- View Rendering (iOS and Android): **React Native**
- API Client: **Relay**
- API Server: **GraphQL.js**
- HTTP Server: **Express**
- Query Building: **Join Monster**
- Database: **PostgreSQL**
- Module Packaging: **Webpack**
