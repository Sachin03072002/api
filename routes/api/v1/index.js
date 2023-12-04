const express = require("express");
const router = express.Router();
console.log("router loaded");
const Controller = require('../../../controllers/AddProductController');
router.post('/addProduct', Controller.createProduct);
module.exports = router;