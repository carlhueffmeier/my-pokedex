const express = require('express');
const router = express.Router();
const { catchErrors } = require('./handlers/errorHandlers');
const pokeController = require('./controllers/pokemon');
const typeController = require('./controllers/types');

// Get list of all pokemon
router.get('/api/pokemon', catchErrors(pokeController.getAll));

// Get detailed information about pokemon
router.get('/api/pokemon/:id', catchErrors(pokeController.getById));

// Get detailed information about pokemon
router.get('/api/types', catchErrors(typeController.getAll));

module.exports = router;
