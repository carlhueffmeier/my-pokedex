const db = require('../db');

exports.getAll = () => {
  const orderedIds = Object.keys(db.pokemon).sort(byNumericalValue);
  return orderedIds.map(id => db.pokemon[id]);
};

exports.getById = id => db.pokemon[id];

function byNumericalValue(a, b) {
  return Number(a) - Number(b);
}
