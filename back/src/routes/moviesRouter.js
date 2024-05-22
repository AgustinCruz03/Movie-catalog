const Router = require("express")
const moviesController = require("../controllers/moviesController")
const validate = require("../middlewares/validateData")


const moviesRouter = Router()
moviesRouter.get("/", moviesController.getMovies)

moviesRouter.post("/", validate , moviesController.createMovie)

module.exports = {
    moviesRouter
}