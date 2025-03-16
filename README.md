# Context API Example - Re-Render Demonstration

This project demonstrates state management using **React Context API** and highlights **unnecessary re-renders** using a color-changing UI.

## 📖 Related Article

This example is part of the article:
👉 **[Why React Context API Can't Replace a State Management Library]({medium-link})**

## 🚀 How It Works

- **Uses React Context API** to manage global state.
- **Changes background color on every re-render** to make re-renders visually noticeable.
- **Console logs component re-renders** for additional debugging.

## 🎨 How Re-Renders Are Visualized

Each component uses `useRef` to generate a new background color **on every render**:

```tsx
const colorRef = useRef(getRandomColor());
colorRef.current = getRandomColor();
```

👉 **If the color changes, the component has re-rendered!**

## ⚠️ Issues with Context API

- **All consumers re-render when state updates.**
- **Difficult to manage and debug re-renders.**
- **Complex state leads to a large provider tree.**

## 🔄 Next Steps

Check out the **Zustand version** for an optimized solution:
👉 [Try the Zustand Example](https://stackblitz.com/edit/vitejs-vite-4qk7myaz?file=README.md)

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
