# Overview

This is a code sample project based on the Vite starter template for demonstrating how a dark mode solution for a React
Single Page App might look. In particular, this solution involves the theme setting being stored in a React state
at the top level component.

## Getting Started

To run the project, first, install NPM dependencies if you have not already done so.

```bash
npm install
```

Then, run the `dev` NPM script:

```bash
npm run dev
```

## Notes

Due to the nature of this project using a `useEffect` hook to actuate the change of color modes, it has an unresolved
dark mode flash issue where the background will initially flash white.

This issue can be solved by adding a JS script to set an initial value of the `data-bs-theme` property of the root
`html` element before the first render. In order to not overcomplicate this project, which is meant to be an
educational example of a concept, the workaround is not implemented.
