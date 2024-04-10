clear
oh-my-posh init pwsh --config "$env:POSH_THEMES_PATH\1_shell.omp.json" | Invoke-Expression

Import-Module -Name Terminal-Icons


---------------
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
3. !important
>- Every time wht you export a `function` of react
```
// import React from "react";
import "./css/App.css";

function App() {
  return (
    <div className="App">
      <h1 className="h1 text-black">Hello World! 222</h1>
    </div>
  );
}

export default App;
```