# Portfolio

A modern, responsive personal portfolio website built with **Angular 21** and deployed on **Firebase Hosting**. This site showcases projects, experience, skills, and contact information with smooth scrolling navigation and URL fragment support for direct linking to sections.

## 🌐 Live Demo

**View the deployed portfolio:** [https://sabari-nathan-mani.web.app/](https://sabari-nathan-mani.web.app/)

Feel free to explore different sections and share the URL with others. Direct links to sections work seamlessly:
- [Portfolio - Experience](https://sabari-nathan-mani.web.app/#experience)
- [Portfolio - Projects](https://sabari-nathan-mani.web.app/#projects)
- [Portfolio - Skills](https://sabari-nathan-mani.web.app/#skills)

## Features

- ✨ Smooth scroll navigation with URL fragment updates
- 📱 Fully responsive design
- 🎨 Modern UI with SCSS styling
- 🔗 Shareable links to portfolio sections (e.g., `yoursite.com#experience`)
- ⚡ Fast, optimized Angular application
- 🚀 Deployed on Firebase Hosting

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher)
- [Angular CLI](https://angular.io/cli) (v21)
- [Firebase CLI](https://firebase.google.com/docs/cli) (for deployment)

## Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Building

To build the project for production, run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Firebase Deployment

This portfolio is deployed on Firebase Hosting. Follow these steps to deploy your changes:

### Initial Setup (One-time)

1. Install Firebase CLI globally (if not already installed):
```bash
npm install -g firebase-tools
```

2. Login to Firebase:
```bash
firebase login
```

3. Initialize Firebase in your project (if not already done):
```bash
firebase init hosting
```

### Deployment Workflow

After modifying the project, follow these steps to deploy your changes:

1. **Build the project** for production:
```bash
ng build
```

2. **Deploy to Firebase Hosting**:
```bash
firebase deploy
```

The deployment will upload the optimized build artifacts to Firebase Hosting. Your changes will be live within a few seconds.

### Quick Deployment Reference

For quick reference, here's the complete deployment workflow:

```bash
# 1. Make your changes
# 2. Build the project
ng build

# 3. Deploy to Firebase
firebase deploy
```

### Viewing Deployment Status

To view your Firebase project details and deployment history:

```bash
firebase hosting:channel:list
```

To check the deployed version:

```bash
firebase hosting:sites
```

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

For Firebase Hosting documentation, visit the [Firebase Hosting Guide](https://firebase.google.com/docs/hosting).

