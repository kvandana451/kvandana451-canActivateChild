# App

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.0. But developed using Angular 16.

Functional Requirements:<br>
A company has an Admin Dashboard with multiple sections:<br>

General Dashboard (/admin/dashboard) – Accessible to all logged-in users.<br>
User Management (/admin/users) – Accessible only to Admins.<br>
Reports (/admin/reports) – Accessible only to Managers and Admins.<br>
I used data Property of a route.<br>

Enhancements<br>
Add a Login Page where users enter their credentials.<br>
Store the user's role in localStorage<br>
Modify AuthService to fetch the role dynamically.<br>
Protect the routes based on the logged-in role.<br>
Guards covers this cases<br>
If a user has logged in and their role is stored → Allowed if their role matches the route's allowed roles.<br>
If no role is in localStorage (not logged in) → Redirected to /login<br>
If a user has an invalid role (not in allowed roles) → Redirected to /login.<br>

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
