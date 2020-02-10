const express = require("express");
const router = express.Router();
const { moviesControllers } = require("../controllers");

router.get("/getmovie", moviesControllers.getMovie);
router.post("/addmovie", moviesControllers.addMovie);
router.post("/deletemovie", moviesControllers.deleteMovie);
router.put("/updatemovie", moviesControllers.updateMovie);

module.exports = router;
