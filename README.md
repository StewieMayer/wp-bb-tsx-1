## v0.2.0 Roadmap

### 📦 Install Babel

🧹 Uninstall ts-loader

```bash
npm uninstall ts-loader
```

📦 Install Babel and necesary presets

```bash
npm i -D @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript babel-loader
```

---

### ⚙️ Configure babel

Create babel.config.json

```json
{
  "presets": [
    "@babel/preset-env",
    ["@babel/preset-react", { "runtime": "automatic" }],
    "@babel/preset-typescript"
  ]
}
```

Update webpack.config.js

```json
module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: "babel-loader",
        exclude: /node_modules/,
      }
    ]
  },
  // ...
}
```

---

### 🧬 Update package.json scripts
```json
{
  "scripts": {
  "build": "webpack --config webpack.config.js",
  "start": "webpack serve --config webpack.config.js"
}
}
```

---
---
---

## v0.1.0 Roadmap

### 🧱 Git setup

Initialize Git repository and basic files.

```bash
git init
echo "### Initial README">README.md
echo "node_modules">.gitignore
git add .
git commit -m "initial commit"
git remote add origin <your-repo-url>
git push -u origin main
```

---

### 📦 npm setup

Initialize npm proyect

```bash
npm init -y
```

---

### ⚛️ Install React

Install react and react-dom

```bash
npm i react react-dom
```

---

### 🛠️ Configure TypeScript

Install TypeScript and necessary types.

```bash
npm i -D typescript tsc ts-loader
npm i -D @types/react @types/react-dom
npx tsc --init
```

Then modify tsconfig.json as needed.

---

### 🔧 Install webpack

Install Webpack and useful plugins.

```bash
npm i -D webpack webpack-cli
npm i -D html-webpack-plugin webpack-dev-server
```

---

### 📁 Folder Structure

```bash
/public
  └── index.html
/src
  └── index.tsx
/README.md
/.gitignore
/webpack.config.js
/tsconfig.json
/package.json
```

---

### ⚙️ Webpack configuration

Configure webpack.config.js with the following properties:

- mode
- entry
- output
- resolve (with .ts, .tsx, .js)
- module (using ts-loader)
- devtool
- plugins (with HtmlWebpackPlugin)
- devServer (for hot reloading)

Add scripts to package.json

```bash
"build": "webpack --config webpack.config.js",
"dev": "webpack serve --config webpack.config.js"
```

---

### 🗂️ File contents

- public/index.html

```html
<!DOCTYPE html>
<html lang="es-MX">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Getting started with webpack</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

- src/index.tsx

```tsx
import ReactDOM from "react-dom/client";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement!);
root.render(<h1>Bienvenidos al Himalaya!</h1>);
```

---

### 🚀 Run Dev Mode

```bash
npm run build
npm run dev
```

---
