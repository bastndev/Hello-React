// TODO: option 1
/* export function Component(props) {
  return <h1>{`Hello ${props.name}`}</h1>;
}
 */

// Second Option

export function Component({ name, date }) {
  return <h1>{`Hello ${name}, You have ${date}`}</h1>;
}
