//FIXME: First Option 1

/* 
export function Acerca(props) {
  return (
    <div>
      <h1>Name: {props.name}</h1>
      <h1>Date: {props.date}</h1>
      <h1>Address: {props.address.address}</h1>
      <h1>City: {props.address.city}</h1>
      <h1>country: {props.address.country}</h1>
    </div>
  );
}
 */

//FIXME: Second option 2

export function Acerca({name, date, address}) {
  return (
    <div>
      <h1>Name: {name}</h1>
      <h1>Date: {date}</h1>
      <h1>Address: {address.address}</h1>
      <h1>City: {address.city}</h1>
      <h1>country: {address.country}</h1>
    </div>
  );
}

