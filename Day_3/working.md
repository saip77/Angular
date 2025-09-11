# How Angular application works?

1. You type ng serve in the terminal to start the development server.
2. When the server starts, it looks for the entry point in angular.json file.
3. You see something like this:
     ```
     "main" : "src/main.ts",
     ```
4. When you open the main.ts file, you can see the AppModule is getting bootstrapped(bootstrapped means the app is getting initialized).

> Note: Every Angular application has a root module and that will be the first module that is bootstrapped when Angular application is started.

5. If you open the AppModule, you can see the App Component is getting bootstrapped.
6. When you open the App Component, you can see the template is getting rendered.