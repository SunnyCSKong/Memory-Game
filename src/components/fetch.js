const IDs = [
  "150",
  "245",
  "330",
  "460",
  "25",
  "94",
  "181",
  "492",
  "635",
  "999",
];

export const fetchPokemon = async () => {
  let pokemon;
  const url = "https://pokeapi.co/api/v2/pokemon/";
  try {
    pokemon = await Promise.all(
      IDs.map(async (id) => {
        const response = await fetch(`${url}${id}/`);

        const json = await response.json();

        return {
          name: json.name,
          sprite: json.sprites.front_shiny,
          id: json.id,
        };
      })
    );
  } catch (err) {
    console.error("Error fetching Pokemon data", err);
  }
  return pokemon;
};
