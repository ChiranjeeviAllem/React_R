# Repository Guidance

## Project Setup

- This is a React 19 application bundled with Parcel.
- The HTML entry point is `index.html`; the JavaScript entry point is `src/components/app.js`.
- UI components live in `src/components/`, and global styles live in `index.css`.

## Conventions

- Keep components as small functional React components and follow the existing default-export pattern.
- Keep changes focused on the relevant component or stylesheet; preserve the existing JavaScript and CSS style.
- Do not edit generated output or Parcel's `.parcel-cache/`.

## Commands

- `npm start` starts the Parcel development server.
- `npm run build` creates a production build.
- `npm test` is declared in `package.json`; check the available test setup before relying on it.
