### Angular File Structure

#### Angular File Structure (Non-Module-Based / Standalone Components Focus)

This structure emphasizes a component-first approach, typical for modern Angular applications built with standalone components, where modules are less prevalent.

##### 📁 `src/` (Source Code)
The heart of your application.

###### 📁 `src/app/` (Application Core)
Contains the main application logic and components.

*   `app.config.ts`
    *   (New in Angular 15+) Where you configure your application's providers (e.g., routing, HTTP interceptors). This replaces `AppModule` for root-level configuration.
*   `app.component.ts`
    *   The root component of your application.
*   `app.component.html`
    *   HTML template for the root component.
*   `app.component.scss` (or `.css`)
    *   Styles for the root component.
*   `main.ts`
    *   The entry point of your application, bootstrapping the root component with `app.config.ts`.

#####  📁 `src/app/core/` (Core Application Services/Utilities)
Contains single-instance services, interceptors, and reusable utilities that are critical to the entire application and often loaded once.

*   `services/`
    *   `auth.service.ts`
    *   `logger.service.ts`
*   `interceptors/`
    *   `auth.interceptor.ts`
*   `guards/`
    *   `auth.guard.ts`
*   `constants/`
    *   `app-constants.ts`

##### 📁 `src/app/shared/` (Shared Components, Directives, Pipes)
Contains components, directives, and pipes that are used across multiple *feature areas* and do not have their own state or specific business logic. They are typically presentational.

*   `components/`
    *   `loading-spinner/`
        *   `loading-spinner.component.ts`
        *   `loading-spinner.component.html`
        *   `loading-spinner.component.scss`
    *   `header/`
        *   `header.component.ts`
        *   `header.component.html`
        *   `header.component.scss`
*   `directives/`
    *   `highlight.directive.ts`
*   `pipes/`
    *   `truncate.pipe.ts`

##### 📁 `src/app/features/` (Feature-Specific Logic - Main Application Areas)
Organizes your application into distinct, self-contained feature areas. Each subfolder represents a major feature.

*   **`users/`** (Example Feature)
    *   `users.routes.ts`
        *   Feature-specific routing configuration (often uses `loadChildren` for lazy loading).
    *   `components/`
        *   `user-list/`
            *   `user-list.component.ts`
            *   `user-list.component.html`
            *   `user-list.component.scss`
        *   `user-detail/`
            *   `user-detail.component.ts`
            *   `user-detail.component.html`
            *   `user-detail.component.scss`
    *   `services/`
        *   `user.service.ts`
    *   `models/`
        *   `user.model.ts`
    *   `pages/` (Alternative for components acting as full-page views)
        *   `user-dashboard/`
            *   `user-dashboard.page.ts`
            *   `user-dashboard.page.html`
            *   `user-dashboard.page.scss`

*   **`products/`** (Another Example Feature)
    *   `products.routes.ts`
    *   `components/`
        *   `product-card/`
        *   `product-form/`
    *   `services/`
        *   `product.service.ts`
    *   `models/`
        *   `product.model.ts`

###### 📁 `src/assets/`
For static assets like images, fonts, and data files.

*   `images/`
    *   `logo.png`
*   `icons/`
    *   `favicon.ico`
*   `data/`
    *   `config.json`

##### 📁 `src/environments/`
Contains environment-specific configuration files.

*   `environment.ts`
    *   Default development environment settings.
*   `environment.prod.ts`
    *   Production environment settings.

### 📁 `src/styles/`
Global stylesheets, often shared across the entire application.

*   `_variables.scss` (or `.css`)
*   `_mixins.scss` (or `.css`)
*   `_base.scss` (or `.css`)
*   `styles.scss` (or `.css`)
    *   Main entry point for global styles, importing other style files.

##### ⚙️ Project Configuration Files
These files reside at the project root level.

*   `angular.json`
    *   Workspace configuration, build targets, projects.
*   `package.json`
    *   Project dependencies and scripts.
*   `tsconfig.json`
    *   TypeScript compiler configuration.
*   `README.md`
    *   Project documentation.
*   `.gitignore`
    *   Files and directories to ignore in Git.
*   `.editorconfig`
    *   Code style configuration for editors.
*   `karma.conf.js`
    *   Configuration for Karma (unit testing).
*   `browserslist`
    *   Target browsers for CSS autoprefixing and Babel.