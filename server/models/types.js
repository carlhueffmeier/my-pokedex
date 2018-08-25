const db = require('../db');

exports.getAll = () => Object.values(db.types);
