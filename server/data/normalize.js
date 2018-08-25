const fs = require('fs');
const typeData = require('./base/types.json');
const pokeData = require('./base/pokedex.json');

const types = normalizeTypesData(typeData);
const typeIdByChineseName = createChineseDictionary(types);
const pokemon = normalizePokeData(pokeData);

fs.writeFileSync('./types.json', JSON.stringify(types));
fs.writeFileSync('./pokemon.json', JSON.stringify(pokemon));

function normalizeTypesData(data) {
  return data.reduce(
    (target, type, index) => ({
      ...target,
      [index]: {
        id: String(index),
        en: type.ename,
        jp: type.jname,
        ch: type.cname
      }
    }),
    {}
  );
}

function createChineseDictionary(types) {
  return Object.entries(types).reduce(
    (target, [key, val]) => ({
      ...target,
      [val.ch]: key
    }),
    {}
  );
}

function normalizePokeData(data) {
  const getImageUri = ({ id, ename }) => `/img/${id}${ename}.png`;
  const getThumbnailUri = ({ id, ename }) => `/thumbnails/${id}${ename}.png`;
  const getSpriteUri = ({ id }) => `/sprites/${id}MS.png`;

  return data.reduce(
    (target, pokemon) => ({
      ...target,
      [pokemon.id]: {
        id: pokemon.id,
        name: {
          en: pokemon.ename,
          jp: pokemon.jname,
          ch: pokemon.cname
        },
        stats: { ...pokemon.base },
        type: pokemon.type.map(cname => typeIdByChineseName[cname]),
        images: {
          large: getImageUri(pokemon),
          thumbnail: getThumbnailUri(pokemon),
          sprite: getSpriteUri(pokemon)
        }
      }
    }),
    {}
  );
}
