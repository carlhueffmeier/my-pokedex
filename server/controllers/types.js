const Types = require('../models/types');

exports.getAll = async (req, res) => {
  res.json(Types.getAll());
};
