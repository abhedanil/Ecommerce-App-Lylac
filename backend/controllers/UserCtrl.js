const User = require("../models/UserModel")
const asyncHandler = require('express-async-handler')
const { generateRefreshToken } = require("../config/refreshToken")
const {generateToken}= require("../config/jwtToken")
const Cart = require("../models/CartModel")
const Product= require("../models/ProductModel")
const validateMongoDbId = require("../utils/validateMongodbId")
const createUser = asyncHandler(async (req, res) => {
    console.log("innnnnn")
    const email = req.body.email;
    const findUser = await User.findOne({ email: email })
    console.log(findUser)
    if (!findUser) {
        //create a new user
        const newUser =await User.create(req.body)
        console.log(newUser)
        res.json({
            success:true,
            message:"User created successfully",
            user:newUser})
    }
    else {
        res.json({
            success:false,
            message:"User Already exists",
            })
    }
})
const loginUserCntrl = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    console.log(email, password)
    const findUser = await User.findOne({ email: email })
    if (findUser && (await findUser.isPasswordMatched(password))) {
        const refreshToken = await generateRefreshToken(findUser?._id);
        const updateuser = await User.findByIdAndUpdate(
            findUser.id,
            {
                refreshToken: refreshToken,
            },
            { new: true }
        );
        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            maxAge: 72 * 60 * 60 * 1000,
        });
            console
        res.json({
            _id: findUser?._id,
            firstname: findUser?.firstname,
            lastname: findUser?.lastname,
            email: findUser?.email,
            message:"login success",
            token: generateToken(findUser?._id),
        })
    }
    else {
        throw new Error("Invalid Credentials")
    }
})

// getAllUser

const getAllUsers = asyncHandler(async (req, res) => {
    try {
        const getUsers = User.find()
        res.json(getUsers)
    } catch (error) {
        throw new Error(error)
    }

})

// handle refresh token

const handleRefreshToken = asyncHandler(async (req, res) => {
    const cookie = req.cookies;
    if (!cookie?.refreshToken) throw new Error("No Refresh Token in Cookies");
    const refreshToken = cookie.refreshToken;
    console.log(refreshToken)
    const user = await User.findOne({ refreshToken });
    if (!user) throw new Error(" No Refresh token present in db or not matched");
    jwt.verify(refreshToken, process.env.JWT_SECRET, (err, decoded) => {
      if (err || user.id !== decoded.id) {
        throw new Error("There is something wrong with refresh token");
      }
      const accessToken = generateToken(user?._id);
      res.json({ accessToken });
    });
  });

  const addToCart = asyncHandler(async (req, res) => {
    
    const  cart  = req.body;
    const { _id } = req.user;
    // validateMongoDbId(_id);
    console.log(req.body)
    try {
        const  cart  = req.body;
      let products = [];
      const user = await User.findById(_id);
      // check if user already have product in cart
      const alreadyExistCart = await Cart.findOne({ orderby: user._id });
        console.log(alreadyExistCart,"aa")
      if(alreadyExistCart){
        products= alreadyExistCart.products


        }
      
        let object = {}; 
        object.product = cart.productId;
        object.quantity = 1;
        let getPrice = await Product.findById(cart.productId).select("price").exec();
        let pro=await Product.findById(cart.productId)
        console.log(pro.quantity-1)
        let newquantity= pro.quantity-1
        object.price = getPrice.price;
        products.push(object);
        console.log(products,"hhhh");
     
       
      let cartTotal = 0;
      for (let i = 0; i < products.length; i++) {
        cartTotal = cartTotal + products[i].price ;
      }

      console.log(cartTotal)
      if(alreadyExistCart){
        const decreaseCount= await Product.findByIdAndUpdate({_id:cart.productId},
            {
                quantity:newquantity
            })
        
        let updatedCart = await Cart.findByIdAndUpdate({ _id:alreadyExistCart._id },
            {products:products,
                cartTotal:cartTotal,
                cartCount:products.length
            }
        )
        res.json(updatedCart)
      }  else{
        let newCart = await new Cart({
            products, 
            cartTotal,
            orderby: user?._id,
            cartCount:products.length
          }).save();
          res.json(newCart); 
      }
      
    } catch (error) {
      throw new Error(error);
    }
  });

  const getUserCart = asyncHandler(async (req, res) => {
    const { _id } = req.user;
 
    try {
      const cart = await Cart.findOne({ orderby: _id }).populate(
        "products.product"
      );
      res.json({cart:cart,cartCount:cart.length});
    } catch (error) {
      throw new Error(error);
    }
  });
  const deleteProductFromCart = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    const productId =req.body.id
    const proID=req.body.proid._id
    console.log(proID,"ppppp")
    console.log(req.body,"bbbbb");
    console.log(productId);
    const alreadyExistCart = await Cart.findOne({ orderby:_id });
    let pro=await Product.findById(proID)
        console.log(pro.quantity-1)
        let newquantity= pro.quantity+1
    let  products= alreadyExistCart.products
    let filtered_arr = products.filter( function(pro) { //callback function
        if(pro._id!=(productId)) { //filtering criteria
          return pro;
        }
      })
      if(productId){
        const increaseCount= await Product.findByIdAndUpdate({_id:proID},
            {
                quantity:newquantity
            })
      }
      
        
     
      let updatedCart = await Cart.findByIdAndUpdate({ _id:alreadyExistCart._id },
        {products:filtered_arr,
           
        }
      )
  console.log(filtered_arr)
      res.json({cart:updatedCart,
    success:true});
   
  });


module.exports = { createUser,getUserCart,deleteProductFromCart ,loginUserCntrl, getAllUsers,handleRefreshToken,addToCart } 