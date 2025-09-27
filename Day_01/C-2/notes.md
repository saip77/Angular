# Learning basics of Angular

## What is Angular?

Angular is a TypeScript-based open-source front-end web framework mainly maintained by Google.

## Why do we need a framework?

- Easy for maintaining code
- Easy to structure code in modules
- Code reusability
- Everything at one place

## Why we need Angular?

- Used for building Single Page Applications (SPA)
- It is Typescript based
- MVC based framework
- Comes with Angular CLI which is a powerful tool for scaffolding, building, testing, and deploying Angular apps
- Uses dependency injection: Dependency Injection in Angular is a built-in mechanism to automatically supply components and services with the objects they need, without you manually creating them.

## What is the role of Node.js in Angular?

- Development tools:
Angular CLI is built on Node.js. When you install Angular CLI with npm, you’re using Node’s package manager to download Angular and its dependencies.

- Local dev server & build:
When you run ng serve, it uses Node.js to:

1. compile and bundle your app (via Webpack under the hood)
2. start a lightweight development web server
3. watch for changes and rebuild automatically

- Package management:
All Angular libraries and third-party packages are fetched via npm (Node Package Manager).