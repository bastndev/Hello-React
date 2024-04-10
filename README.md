# Hello React

>- Inside of your Astro project, you'll see the following folders and files:

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
>- Every time wht you export a `export default App;` of react

> 1. in Astro `import Coffe from '../components/Coffe';`
```jsx
function Coffe() {
  return <h1>Second Export Coffe</h1>;
}

export default Coffe;
```
> 2. in Astro `import {Coffe}  from '../components/Coffe';`
```jsx
export function Coffe() {
  return <h1>Second Export Coffe</h1>;
}
```

3. Tip
