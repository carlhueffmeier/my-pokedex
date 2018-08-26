const fs = require('fs');
const typeData = require('./base/types.json');
const pokeData = require('./base/pokedex.json');
const pokeDataWithDescriptions = require('./base/pokemon-v1.json');

const types = normalizeTypesData(typeData);
const typeIdByChineseName = createChineseDictionary(types);
const descriptionByPokemonId = createDescriptionDictionary(
  pokeDataWithDescriptions
);
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

function createDescriptionDictionary(data) {
  return data.reduce(
    (target, entry) => ({
      ...target,
      [entry.pkdx_id.toString().padStart(3, '0')]: entry.description.slice(
        0,
        entry.description.length / 2 - 1
      )
    }),
    {}
  );
}

function sluggifyName(str) {
  return str.replace(/[^\w\s]/gi, '').replace(/\s/gi, '_');
}

function normalizePokeData(data) {
  const getImageUri = ({ id, ename }) => `/img/${id}${sluggifyName(ename)}.png`;
  const getThumbnailUri = ({ id, ename }) =>
    `/thumbnails/${id}${sluggifyName(ename)}.png`;
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
        description: descriptionByPokemonId[pokemon.id],
        stats: {
          HP: pokemon.base['HP'],
          ATK: pokemon.base['Attack'],
          DEF: pokemon.base['Defense'],
          SATK: pokemon.base['Sp.Atk'],
          SDEF: pokemon.base['Sp.Def'],
          SPD: pokemon.base['Speed']
        },
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
