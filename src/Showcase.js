import image from "./images/bulbasaur.jpg";
import "./app.css";
import "./showcase.css";

function Showcase() {
  let favPokemon = "Bulbasaur";
  let pokeCharacteristics = {
    type: "Grass",
    move: "Vine Whip"
  };

  return (
    <div className="background">
      <h1>{favPokemon}'s Showcase component</h1>
      <img src={image} alt="Bulbasaur" />
      <h2>
        {favPokemon}'s type is{" "}
        <span className="spanOne">{pokeCharacteristics["type"]}</span> and one
        of their moves is{" "}
        <span className="spanTwo">{pokeCharacteristics["move"]}</span>.
      </h2>
    </div>
  );
}

export { Showcase };
