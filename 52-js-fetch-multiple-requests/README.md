# Multiple fetch requests

Sometimes an API might respond with an array of objects, each object representing something. But if each of those objects would contain a lot of different properties, the data soon becomes quite large.

To solve this, many APIs will include URLs to other resources. This way, you can decide to make another request to get the information, or you might not need it and that unused data wasn't transferred.

Go to this URL and take a look at the JSON object: [https://pokeapi.co/api/v2/pokemon/eevee](https://pokeapi.co/api/v2/pokemon/eevee). If you're using Chrome, a good extension to install is [JSON Viewer](https://chrome.google.com/webstore/detail/json-viewer/gbmdgpbipfallnflgajpaliibnhdgobh).

The object being served is a big object with lots of information, but the vast majority of the properties include a `url` key. Go to one of these URLs to see that there's even more data there.

Let's look at how we'd get the data for the `accuracy` of each of one Pokemon's `moves`:

```javascript
const moveAccuracies = [];

const getAllPokemonMoveAccuracy = async (pokemonName) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
  const pokemonData = await fetch(url).then((response) => response.json());

  pokemonData.moves.forEach(async (moveObject) => {
    const moveData = await fetch(moveURL).then((response) => response.json());

    moveAccuracies.push(moveData.accuracy);
  });
};
```

This code keeps an array of `moveAccuracies` and pushes in a new value when each response is received from the server. You might want this behaviour, the moves would gradually appear on the screen whenever each one resolved. However, you might want to wait until _all_ the requests have received responses before updating the array. Both ways have their pros and cons, see if you can search for a way to do something when _all_ the fetch requests have been resolved.
