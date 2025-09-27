# More on Angular

## Understanding the project structure (Angular v19 - Standalone First)

This structure reflects a modern Angular application where standalone components are preferred, reducing the reliance on NgModules for component organization.

```bash
.
├── angular.json               # Workspace configuration, build targets, projects.
├── package.json               # Project dependencies and scripts.
├── README.md                  # Project documentation.
├── tsconfig.json              # Base TypeScript configuration for the project.
├── .editorconfig              # Code style configuration for editors.
├── .gitignore                 # Files and directories to ignore in Git.
├── karma.conf.js              # (Optional) Configuration for Karma (unit testing).
├── browserslist               # Target browsers for CSS autoprefixing and Babel.
│
├── src/                       # Source code for your application.
│   ├── main.ts                # Entry point: bootstraps the root component using app.config.ts.
│   ├── index.html             # The main HTML file for your application.
│   ├── styles.scss            # (or .css) Global styles for your application.
│   ├── favicon.ico            # The icon displayed in the browser tab.
│   │
│   ├── app/                   # Contains the core application logic and components.
│   │   ├── app.config.ts      # NEW: Application-level configuration (providers, routing).
│   │   ├── app.component.ts   # The root standalone component.
│   │   ├── app.component.html # HTML template for the root component.
│   │   ├── app.component.scss # (or .css) Styles for the root component.
│   │   ├── app.component.spec.ts # Unit tests for the root component.
│   │   │
│   │   ├── core/              # (Optional) Singleton services, guards, interceptors.
│   │   │   ├── services/
│   │   │   │   └── auth.service.ts
│   │   │   └── guards/
│   │   │       └── auth.guard.ts
│   │   │
│   │   ├── shared/            # (Optional) Reusable standalone components, directives, pipes.
│   │   │   ├── components/
│   │   │   │   └── button/
│   │   │   │       ├── button.component.ts
│   │   │   │       ├── button.component.html
│   │   │   │       └── button.component.scss
│   │   │   └── pipes/
│   │   │       └── capitalize.pipe.ts
│   │   │
│   │   └── features/          # (Optional) Folder for feature-specific standalone components and logic.
│   │       ├── users/         # Example feature: User management.
│   │       │   ├── users.routes.ts # Feature-specific routing for lazy loading.
│   │       │   ├── components/
│   │       │   │   └── user-list/
│   │       │   │       ├── user-list.component.ts
│   │       │   │       ├── user-list.component.html
│   │       │   │       └── user-list.component.scss
│   │       │   └── services/
│   │       │       └── user.service.ts
│   │       │
│   │       └── products/      # Another example feature.
│   │           └── ... (similar structure to users)
│   │
│   ├── assets/                # Static assets (images, fonts, data files).
│   │   ├── images/
│   │   │   └── logo.png
│   │   └── data/
│   │       └── config.json
│   │
│   └── environments/          # Environment-specific configuration.
│       ├── environment.ts     # Default development environment.
│       └── environment.prod.ts # Production environment.
│
├── tsconfig.app.json          # TypeScript config specifically for the application build.
├── tsconfig.spec.json         # TypeScript config specifically for unit tests.
└── .vscode/                   # (Optional) VS Code specific settings.
    └── settings.json
```

## Understanding configuration files

- angular.json: Workspace configuration, build targets, projects. It acts as the blueprint for your entire Angular project, telling the CLI exactly how to manage and compile your code.

- package.json: Project dependencies and scripts.

- tsconfig.json: Base TypeScript configuration for the project.


## How does an Angular application work?

*   The browser first loads `index.html`.
*   `index.html` contains a special tag, usually `<app-root>`, which is where your Angular application will be inserted.
*   `main.ts` is the application's entry point. It bootstraps (initializes) the root component of your application, typically `AppComponent`, using the configuration defined in `app.config.ts`.
*   The `AppComponent` then takes control of the `<app-root>` tag and renders its template.