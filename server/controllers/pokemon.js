const Pokemon = require('../models/pokemon');

exports.getAll = async (req, res) => {
  res.json(Pokemon.getAll());
};

exports.getById = async (req, res) => {
  const id = req.params.id;
  const pokemon = Pokemon.getById(id);
  if (pokemon) {
    res.json(pokemon);
  } else {
    res.status(404);
    res.send('Pokemon not found');
  }
};
