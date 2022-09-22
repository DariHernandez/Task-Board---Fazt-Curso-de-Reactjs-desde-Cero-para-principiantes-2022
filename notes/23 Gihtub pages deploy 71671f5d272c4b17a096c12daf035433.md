# 23. Gihtub pages deploy

docs gh-pages: [https://www.npmjs.com/package/gh-pages](https://www.npmjs.com/package/gh-pages)

dosc vite with gh-pages: [https://vitejs.dev/guide/static-deploy.html#github-pages](https://vitejs.dev/guide/static-deploy.html#github-pages)

# gh-pages

## Install

```bash
npm install gh-pages --save-dev
```

## Add new script in the package.json

```json
// package.json

...
"scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "deploy": "gh-pages -d dist" // new script
},
...
```

# Vite

## Update vite.config.js

```jsx
// vite.config.js

export default defineConfig({
  plugins: [react()],
  base: '/Task-Board--React-Couse/' // repo name
})
```

## Create [deploy.sh](http://deploy.sh)

```bash
# deploy.sh

#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git checkout -b main
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:DariHernandez/Task-Board--React-Couse.git main:gh-pages

cd -
```

# Deploy

```bash
npm run build
npm run deploy
```

- Deploy branch “gh-pages” from github pages