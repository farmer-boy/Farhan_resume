# Farhan Portfolio

A modern portfolio website built with React, TypeScript, and Tailwind CSS.

## Project Overview

This is a personal portfolio website showcasing projects, skills, experience, and contact information.

## Technologies Used

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
- React Router

## Getting Started

### Prerequisites

- Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Installation

Follow these steps:

```sh
# Step 1: Clone the repository
git clone https://github.com/farmer-boy/farhan-and-you-chat.git

# Step 2: Navigate to the project directory
cd farhan-and-you-chat

# Step 3: Install the necessary dependencies
npm install

# Step 4: Start the development server
npm run dev
```

The application will be available at `http://localhost:8080`

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/     # React components
│   ├── layout/    # Layout components (Navbar, Footer)
│   ├── sections/  # Section components (Hero, About, etc.)
│   └── ui/        # UI components from shadcn-ui
├── pages/         # Page components
├── hooks/         # Custom React hooks
└── lib/           # Utility functions
```

## Deployment

Build the project for production:

```sh
npm run build
```

The `dist` folder will contain the production-ready files that can be deployed to any static hosting service.
