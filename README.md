# Ember

Tanner's habit tracker PWA. Habits, streaks, and history stay in this phone's local storage only.

**Live site:** https://tanman2542.github.io/

This is a GitHub Pages user site, so the app is served at the domain root. That is required for the service worker (`scope: /`).

## Redeploy updates

1. Build or unzip the new static `dist/` output.
2. Copy the `dist/` contents to the **root** of this repository (not into a `dist/` folder).
3. Keep `.nojekyll` in the repo root, and keep `404.html` as a copy of `index.html`.
4. Commit and push to `main`.

GitHub Pages usually updates https://tanman2542.github.io/ within a few minutes.
