# How Angular Works

- Running `ng serve` triggers Angular to look for the entry point defined in **angular.json**, which is `main: src/main.ts`.
- **main.ts** acts as the application’s entry point.
- It bootstraps the Angular application by loading the **AppModule**.
- **AppModule** is the root module, and it bootstraps the **AppComponent**.
- **AppComponent** is the main component, identified by the selector **app-root**.
- The **app-root** selector represents the AppComponent in the DOM.
- The AppComponent is responsible for rendering the application’s main HTML template.
