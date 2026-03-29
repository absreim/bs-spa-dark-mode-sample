# bs-spa-dark-mode-sample

This is a code sample project based on the Vite starter template for demonstrating how a dark mode solution for a React
Single Page App (SPA) might look.

This solution involves manipulating the DOM in an uncontrolled manner, which is in itself less than ideal because
uncontrolled logic tends to be harder to reason about. However, implementing this way allows for dark mode to be applied
to the entire app, not just under the React root `div` element.

## Getting Started

To run the project, first, install NPM dependencies if you have not already done so.

```bash
npm install
```

Then, run the `dev` NPM script:

```bash
npm run dev
```