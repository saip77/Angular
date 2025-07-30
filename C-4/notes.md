#### Running an Angular Application

```
ng new my-app
```

This command creates a new Angular project in a folder called my-app.

```
cd my-app
```

This command changes the current directory to my-app.

```
ng serve
```

This command starts the development server and opens the application in a web browser.


#### Understanding the Project Structure

The Angular project structure is as follows:

```
my-app/
├── README.md
├── angular.json
├── package.json
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.spec.json
├── src/
│   ├── app/
│   │   ├── app.component.css
│   │   ├── app.component.html
│   │   ├── app.component.spec.ts
│   │   ├── app.component.ts
│   │   ├── app.module.ts
│   │   └── app.routing.module.ts
│   ├── assets/
│   │   └── favicon.ico
│   ├── environments/
│   │   ├── environment.prod.ts
│   │   └── environment.ts
│   ├── index.html
│   ├── main.ts
│   ├── polyfills.ts
│   ├── styles.css
│   └── test.ts
├── tslint.json
└── yarn.lock
```

- src: This folder contains the source code of the application.
- app: This folder contains the main application component, the routing module, and the module that defines the application's providers and declarations.
- assets: This folder contains static assets such as images, fonts, and CSS files.
- environments: This folder contains environment-specific configuration files.
- index.html: This file is the entry point of the application and is responsible for rendering the application's root component.
- main.ts: This file is the entry point of the application and is responsible for bootstrapping the application.
- polyfills.ts: This file contains polyfills for browser APIs that are not available in all browsers.
- styles.css: This file contains the styles for the application.
- test.ts: This file is used for testing the application.
- tslint.json: This file contains the configuration for the TypeScript linter.
- yarn.lock: This file is used to lock the versions of the dependencies in the project.