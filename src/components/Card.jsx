import "./css/card.css";

export function Card({ state }) {
  return (
    <div className="card">
      <h1>My first card</h1>
      <p className={state ? "on" : "off"}>Detail card</p>
    </div>
  );
}
