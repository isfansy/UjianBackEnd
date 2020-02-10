let express = require("express");
let router = express.Router();
const { movcatControllers } = require("../controllers");

router.get("/getmovcat", movcatControllers.getMovcat);
router.post("/addmovcat", movcatControllers.addMovcat);
router.delete("/deletemovcat", movcatControllers.deleteMovcat);

module.exports = router;
