import React, { useEffect, useState } from 'react'
import ReactStars from "react-rating-stars-component";
import {BsCart4} from "react-icons/bs"
import axios from "axios"
import {Rest} from "../rest"
const ProductCard = (props) => {
    const ratingChanged = (newRating) => {
        console.log(newRating);
    };   
    const product=props.product

const handleAddToCart =async()=>{
    const token = localStorage.getItem("JwtToken");
            console.log(token)
            if(token){  
                const cart={ 
                    productId:product?._id,
                     quantity:product?.quantity,
                    price:product?.price
                }
               const result = await axios.post(`${Rest}/api/user/addToCart`,cart,{
                headers:{
                    Authorization:`Bearer ${token}`
                }
               })   
               if(result){
                alert("Product added to cart")
               }
            } 
            else{
                alert("Please login to add this product to cart")}
}

    return (
        <div className='col-3'>
            <div className="product-card d-flex">
                <div className="product-image ">
                    <img src={product.image} ></img>
                </div>
                <div className="product-details">
                    {/* <h6 className='brand'>Senheiser</h6> */}
                    <h5 className='product-title'>
                        {product.title}
                    </h5>
                    <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={18}
                        activeColor="#2f7bf5"
                        value='3'
                    />
                    <div className='d-flex  '>
                        <div>
                            <p className="price">
                               {product.price}$
                            </p>
                        </div>
                        <div className='cart-icon '>
                            <BsCart4 onClick={handleAddToCart}/>
                        </div>
                    </div>
                    <div className="prod-count">
                        <p>Items Left : {product.quantity}</p>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default ProductCard
