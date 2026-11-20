# Ember

Tanner's habit tracker PWA. Habits, streaks, and history stay in this phone's local storage only.

**Live site:** https://tanman2542.github.io/

**Friends version:** https://tanman2542.github.io/friends/

This is a GitHub Pages user site, so the main app is served at the domain root. That is required for the service worker (`scope: /`). The friends build is a separate PWA under `/friends/`.

## Redeploy updates

1. Copy the main `dist/` contents to the **root** of this repository (not into a `dist/` folder).
2. Copy the friends `dist-friends/` contents into the `friends/` folder.
3. Keep `.nojekyll` in the repo root, keep root `404.html` as a copy of root `index.html`, and keep `friends/404.html` as a copy of `friends/index.html`.
4. Commit and push to `main`.

If PNG icons change, update the base64 files under `icon-sources/` and the `Materialize icons` workflow will write the real PNGs at the repo root and under `friends/`. If you push with git locally, you can commit the PNGs directly.

GitHub Pages usually updates the live URLs within a few minutes.
