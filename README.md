# Leonardo Test

This project is using [nx.dev](https://nx.dev/) for monorepo management.

## Installation

```sh
yarn
```

## Run tasks

To run the dev server for your app, use:

```sh
yarn dev
```

To create a production bundle:

```sh
yarn build

```

To view project graph:

```sh
yarn graph
```

## Project structure

The project follows a modular and organized structure to keep the codebase clean, scalable, and easy to navigate.

```pl
project-root
├── apps/                 # Main application entry points
│   ├── leonardo-test/    # Web application (Next.js / React)
├── libs/                 # Shared libraries and components
│   ├── ui/               # Reusable UI components
│   ├── features/         # Business logic components
│   ├── utils/            # Utility functions, stores and etc
│   ├── api/              # Data access libraries
├── ...
├── nx.json               # Nx workspace configuration
├── tsconfig.base.json    # Base TypeScript configuration
└── README.md             # Project documentation and instructions
```
