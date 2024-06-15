import React, { useEffect, useState } from "react";
import "./Content.css";
import Card from "./Card";
import { fetchPokemon } from "./fetch";

function Content({ updateScore, wrongAns, score }) {
  const [pokeData, setPokeData] = useState([]);
  const [clicked, setClicked] = useState([]);

  useEffect(() => {
    fetchPokemon().then(setPokeData);
  }, []);

  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const handleClick = (name) => {
    const pokemon = name;
    if (clicked.includes(pokemon)) {
      wrongAns();
      setClicked([]);
    } else {
      if (score + 1 == 10) {
        alert("You won!!!");
      } else {
        setClicked((clicked) => [...clicked, pokemon]);
      }
      updateScore();
    }
    setPokeData(shuffle(pokeData));
  };

  return (
    <div className="content-container">
      {pokeData.map((pokemon) => (
        <Card
          key={pokemon.id}
          name={pokemon.name}
          sprite={pokemon.sprite}
          handleClick={() => handleClick(pokemon.name)}
        ></Card>
      ))}
    </div>
  );
}

export default Content;
