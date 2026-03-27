# bs-spa-dark-mode-sample

This is a code sample project based on the Vite starter template for demonstrating how a dark mode solution for a React
Single Page App (SPA) might look. In particular, this solution involves conditionally rendering the `data-bs-theme`
attribute used by Bootstrap.

Unfortunately, this solution is far from satisfactory because the top level `html` element used to set the color theme
globally is outside of the rendering tree for Vite SPAs. Running the project will demonstrate this fact. The color mode
toggle only works for the card component of the page and not the background.

## Getting Started

To run the project, first, install NPM dependencies if you have not already done so.

```bash
npm install
```

Then, run the `dev` NPM script:

```bash
npm run dev
```