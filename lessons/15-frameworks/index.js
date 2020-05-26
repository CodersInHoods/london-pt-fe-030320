const pokemonContainer = document.querySelector("#pokemon");

const pokemon = [
  {
    name: "poikachu",
    type: "electric",
    img: "pika.png",
    stats: [
      {
        name: "health",
        value: 100,
      },
    ],
  },
  {
    name: "bulbasaur",
    type: "grass",
    img: "bulb.png",
    stats: [
      {
        name: "health",
        value: 90,
      },
    ],
  },
];

pokemon.forEach((pokemonObject) => {
  const h3 = Instigate.createElement("h3", { innerText: pokemonObject.name });
  const typeButton = Instigate.createElement("button", {
    innerText: pokemonObject.type,
    onClick: () => {
      console.log(
        "MAKE A REQUEST TO API TO GET ALL POKRMON OT TYPE",
        pokemonObject.type
      );
    },
  });

  const input = Instigate.createElement("input", {
    onChange: (e) => console.log(e.target.value),
  });

  const div = Instigate.createElement("div", {
    className: "pokemonCard",
    children: [h3, typeButton, input],
  });
  pokemonContainer.append(div);
});
