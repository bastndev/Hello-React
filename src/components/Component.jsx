// TODO: option 1
/* export function Component(props) {
  return <h1>{`Hello ${props.name}`}</h1>;
}
 */

// Second Option

export function Component({ name }) {
  return <h1>{`Hello ${name}`}</h1>;
}
