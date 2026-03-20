# Vite React Project with shadcn/ui

This is a React project built with Vite, TypeScript, and shadcn/ui components.

## Features

- Built with Vite for fast development
- Type Safety with TypeScript
- UI Components with shadcn/ui
- Tailwind CSS for styling
- React Router for navigation
- Test with Vitest

## Getting Started

### Prerequisites
- Node.js >= 18.x
- npm (v9 or higher)

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

### Building

```bash
# Build for production
npm run build
```

### Testing

```bash
# Run tests
npm run test
```

## Deployment

This project can be deployed to Vercel. Vercel will automatically detect this as a React/Vite project and build it accordingly, regardless of the error message shown by Vercel CLI.

If Vercel reports `No Next.js version detected`, the project is being treated as a Next.js app by mistake. This repo is a Vite app located in the `siddharth/` directory.

Use these Vercel settings:

```text
Root Directory: siddharth
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
```

## Project Structure

```
src/
├── components/     # UI Components
├── pages/          # Page components
├── App.tsx         # Main App component
├── main.tsx        # Entry point
└── index.css       # Global styles
```

## Dependencies and Scripts

See package.json for a complete list of dependencies and available scripts.
