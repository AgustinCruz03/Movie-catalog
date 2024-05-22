const moviesServices = require("../services/moviesServices")
module.exports = {
    getMovies: async (req,res) => {
        try {
        const movieList = await moviesServices.getMovies()
        res.status(200).json(movieList)
        } catch (error) {
            res.status(500).json({
                error:"no se encontraron peliculas"
            })
        }
    },

    createMovie: async (req, res) => {
        try {
            const {title, year, director, duration, genre, rate, poster} = req.body;
            const newMovie = await moviesServices.createMovie({title, year, director, duration, genre, rate, poster})
            res.status(201).json(newMovie)
        } catch (error) {
            res.status(500).send(error.message)
        }
    }
}