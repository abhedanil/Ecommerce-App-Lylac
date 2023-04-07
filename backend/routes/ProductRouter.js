const express = require("express");
const {
    addNewProduct,getAllProducts
} = require("../controllers/ProductCntrl");
const { isAdmin, authMiddleware } = require("../middlewares/authMiddleWare");
const upload=require("../utils/multer")
const router = express.Router();


router.post('/addProduct',upload.fields([
    { name: "image", maxCount: 1 },
]),addNewProduct)

router.get('/getAllProducts',getAllProducts)
module.exports = router;