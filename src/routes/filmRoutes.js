const express = require('express');
const { getFilms, createFilm, updateFilm, deleteFilm } = require('../controllers/filmController');

const router = express.Router();

router.get('/', getFilms);
router.post('/', createFilm);
router.put('/:id', updateFilm);
router.delete('/:id', deleteFilm);

module.exports = router;
