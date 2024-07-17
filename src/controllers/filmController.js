const Film = require('../models/filmModel');

const getFilms = async (req, res) => {
    try {
        const films = await Film.find();
        res.send(films);
    } catch (error) {
        res.status(500).send({ message: "Error fetching films", error });
    }
};

const createFilm = async (req, res) => {
    try {
        const film = new Film({
            title: req.body.title,
            description: req.body.description,
            image_url: req.body.image_url,
            trailer_url: req.body.trailer_url
        });
        await film.save();
        res.status(201).send(film);
    } catch (error) {
        res.status(500).send({ message: "Error creating film", error });
    }
};

const updateFilm = async (req, res) => {
    try {
        const film = await Film.findByIdAndUpdate(req.params.id, {
            title: req.body.title,
            description: req.body.description,
            image_url: req.body.image_url,
            trailer_url: req.body.trailer_url
        }, { new: true, runValidators: true });
        if (!film) {
            return res.status(404).send({ message: "Film not found" });
        }
        res.send(film);
    } catch (error) {
        res.status(500).send({ message: "Error updating film", error });
    }
};

const deleteFilm = async (req, res) => {
    try {
        const film = await Film.findByIdAndDelete(req.params.id);
        if (!film) {
            return res.status(404).send({ message: "Film not found" });
        }
        res.send({ message: "Film deleted successfully" });
    } catch (error) {
        res.status(500).send({ message: "Error deleting film", error });
    }
};

module.exports = {
    getFilms,
    createFilm,
    updateFilm,
    deleteFilm
};
