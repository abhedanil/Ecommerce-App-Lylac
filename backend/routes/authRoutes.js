const express = require("express")
const router = express.Router()
const {createUser,addToCart, loginUserCntrl, getAllUsers,handleRefreshToken, getUserCart, deleteProductFromCart} = require("../controllers/UserCtrl")
const { isAdmin, authMiddleware } = require("../middlewares/authMiddleWare");
router.post("/register",createUser)
router.post("/login",loginUserCntrl)
router.get("./getAllUsers",getAllUsers)
router.get("/refresh", handleRefreshToken);
router.post("/addToCart",authMiddleware, addToCart)
router.post("/deleteproCart",authMiddleware, deleteProductFromCart)
router.get("/usersCart",authMiddleware,getUserCart)
module.exports=router