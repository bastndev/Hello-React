# Hello React Tips <img src="https://i.makeagif.com/media/11-21-2022/imisbt.gif" alt="picture alt" width="25px" height="25">

>- Important `components` Uppercase  - 

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```
1. install React with
```
npx astro add react  
```

2. add tailwind
```
npx astro add tailwind
```

> [!TIP]
>- Every time wht you export a `export` of react

> 1. in Astro `import App from '../components/App';`
```jsx
function App() {
  return <h1>First Export Coffe</h1>;
}

export default Coffe;
```
> 2. in Astro `import {App}  from '../components/App';` Recommend
```jsx
export function App() {
  return <h1>Second Export Coffe</h1>;
}
```
> 3. in Astro `import App  from '../components/App';` Caution
```jsx
export default function App() {
  return <h1>Third Export Coffe</h1>;
}
```

> [!IMPORTANT]
>- read please `return`
```
export function Coffe() {
  const coffeHot = false;
  if (coffeHot) {
    return <h1>The Coffe is hot</h1>;
  } else {
    return <h1>The Coffe is cold</h1>;
  }
}
```