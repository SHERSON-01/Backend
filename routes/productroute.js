const express = require("express");
const getproductcontroller = require("../controllers/products/getproductcontroller");
const router = express.Router();

router.get("/", getproductcontroller);
router.get("/category/:category", getproductcontroller);
router.get("/subcategory/:sub_category", getproductcontroller);
// router.get("/name/:name", getproductcontroller);

module.exports = router;

