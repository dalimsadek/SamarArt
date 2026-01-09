import { defineConfig } from 'vite'

// If you're deploying to GitHub Pages under the repository name 'Portfolio-',
// set the base to the repo path so assets are correctly linked.
// If you later change the repo name, update this value or use './' for relative paths.
// Use a relative base so the built site works under a custom domain or any path.
// './' is resilient for GitHub Pages custom domains and other static hosts.
export default defineConfig({
  base: '/'
})
