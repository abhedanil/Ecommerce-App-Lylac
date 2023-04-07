const Product = require("../models/ProductModel");
const User = require("../models/UserModel");
const asyncHandler = require("express-async-handler");
const slugify = require("slugify");
const validateMongoDbId = require("../utils/validateMongodbId");
const cloudinary = require('../utils/cloudinary')
const addNewProduct =asyncHandler(async (req,res)=>{

    try{    

        console.log("inside add car try")
        console.log(req.body,"11111111111111111111111")
       
        const image = await cloudinary.uploader.upload(req.files.image[0].path)
        //instance of car
        const product= new Product({
            title: req.body.title, 
            slug:req.body.slug,
            description:req.body.description,
            price:req.body.price,
            image:image.url,
            quantity:req.body.quantity,
            brand:req.body.brand,
            category:req.body.category
        })
        //save car
        await Product.create(product)
        res.status(201).json({
            product, 
            success:true,
            
        })
        console.log(car)
    }catch(err){
        console.log(err)
        res.status(400).json({
            success:false,
            message:"Couldn't save in database"
        })
    }  
})

const getAllProducts = asyncHandler(async(req,res)=>{

    try{
        const products = await Product.find({})
        console.log(products)
        res.status(200).json({
            success:true,
            products:products
        })
    }catch(error){
        res.json({
            success:false,
            error:error
        })
    }
})



module.exports = {
    addNewProduct,
    getAllProducts
}; 