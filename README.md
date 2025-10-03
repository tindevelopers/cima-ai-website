# CIMA AI Website

A modern, high-performance website built with Next.js and Turborepo.

## 🏗️ Monorepo Structure

This project uses Turborepo to manage a monorepo with the following structure:

```
├── apps/
│   └── web/                 # Next.js application
├── packages/
│   └── ui/                  # Shared UI components
├── .github/workflows/       # CI/CD workflows
└── turbo.json              # Turborepo configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 20+
- npm

### Installation

```bash
npm install
```

### Development

```bash
# Start all apps in development mode
npm run dev

# Start only the web app
npm run dev --filter=web

# Build all packages
npm run build

# Run linting
npm run lint

# Run type checking
npm run type-check

# Run tests
npm run test
```

## 📦 Packages

### Apps

- **web**: Next.js application for the main website

### Packages

- **ui**: Shared UI components and design system

## 🔧 Scripts

- `npm run dev` - Start all apps in development mode
- `npm run build` - Build all packages
- `npm run lint` - Run ESLint on all packages
- `npm run type-check` - Run TypeScript type checking
- `npm run test` - Run tests for all packages
- `npm run clean` - Clean all build artifacts

## 🚀 Deployment

The project is configured with GitHub Actions for CI/CD:

- **CI**: Runs on every push and PR, includes build, lint, type-check, and test
- **Deploy**: Automatically deploys to Vercel on pushes to main branch

### Environment Variables

Set up the following secrets in your GitHub repository:

- `VERCEL_TOKEN`: Your Vercel API token
- `ORG_ID`: Your Vercel organization ID
- `PROJECT_ID`: Your Vercel project ID

## 🛠️ Development

### Adding a new package

```bash
# Create a new package
mkdir packages/new-package
cd packages/new-package
npm init -y

# Add it to the workspace
# Update the root package.json workspaces array
```

### Adding a new app

```bash
# Create a new app
mkdir apps/new-app
cd apps/new-app
npm init -y

# Add it to the workspace
# Update the root package.json workspaces array
```

## 📝 License

This project is licensed under the MIT License.