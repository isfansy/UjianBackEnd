let express = require("express");
let router = express.Router();
const { categoryControllers } = require("../controllers");

router.get("/getcategory", categoryControllers.getCategory);
router.post("/addcategory", categoryControllers.addCategory);
router.post("/deletecategory", categoryControllers.deleteCategory);
router.put("/updatecategory", categoryControllers.updateCategory);

module.exports = router;
