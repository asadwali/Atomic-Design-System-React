# Contributing to react-atomic-design-system

Thanks for your interest in contributing! This guide covers how to get set up locally and how to submit changes.

## Getting started

1. Fork the repo and clone your fork:
   ```bash
   git clone https://github.com/<your-username>/Atomic-Design-System-React.git
   cd Atomic-Design-System-React
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a branch for your change:
   ```bash
   git checkout -b feat/my-change
   ```

## Local development

- `npm run dev` — run the component demo app (every component's template page) at `http://localhost:5173`.
- `npm run storybook` — run Storybook at `http://localhost:6006`.
- `npm run lint` — run ESLint.
- `npm run build:lib` — build the publishable library output (`dist/`).
- `npm run build-storybook` — build the static Storybook site.

## Adding or changing a component

- Components live under `src/components`, organized by atomic-design level (atoms/molecules).
- Add or update a Storybook story (`*.stories.jsx`) alongside the component so it's covered by the live demo.
- If the component is public API, export it from `src/index.js` and document its props in the README's component reference table.
- Keep styling in Tailwind CSS utility classes / `class-variance-authority` variants, consistent with existing components.

## Submitting a pull request

1. Make sure `npm run lint` passes and the library still builds (`npm run build:lib`).
2. Commit your changes with a clear message describing the *why*.
3. Push your branch and open a pull request against `main`.
4. Describe what changed and why, and link any related issue.

## Reporting bugs / requesting features

Please open a [GitHub issue](https://github.com/asadwali/Atomic-Design-System-React/issues) with a clear description, reproduction steps (for bugs), and screenshots where helpful.
