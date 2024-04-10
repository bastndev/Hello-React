import "./css/poke.css";

const pokemon = [
  {
    id: 1,
    name: "Pikachu",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
  },
  {
    id: 2,
    name: "Charmander",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
  },
];

export function Pokemon() {
  return pokemon.map((item, id) => {
    return (
      <div key={id}>
        <h1>{item.name}</h1>
        <img className="pokeImg" src={item.img} alt="" />
      </div>
    );
  });
}
