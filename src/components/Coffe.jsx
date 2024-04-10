// TODO: option 1
/* import './css/Coffe.css';

export function Coffe() {
  const coffeHot = true;
  if (coffeHot) {
    return <h1 class="text-teal-300">The Coffe is hot</h1>;
  } else {
    return <h1>The Coffe is cold</h1>;
  }


} */

// TODO: Second option
export function Coffe() {
  const coffeHot = false;
  return <h1>{coffeHot ? "Coffe True" : "Coffe False"}</h1>;
}
