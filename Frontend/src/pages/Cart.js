import React, {useState, useEffect } from "react";
// import watch from "../images/watch.jpg";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import axios from "axios"
import { Rest } from "../rest";
const Cart = () => {
    
    const [cart,setCart]=useState()
    const [product,setProduct]=useState()

        const getUserCart=async()=>{
            const token = localStorage.getItem("JwtToken");
            const result = await axios.get(`${Rest}/api/user/usersCart`,{
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })
            if(result)
            {
                console.log(result,"reeee")
                setCart(result.data)
                setProduct(result.data.cart.products)
            }
        }
useEffect(()=>{
    getUserCart()
},[])
const deleteProducFromCart=async(product)=>{
    if(confirm("Are you sure to delete this product from cart")){
        const token = localStorage.getItem("JwtToken");
        console.log(product);
        const body={
            id:product._id
        }
        const result=await axios.post(`${Rest}/api/user/deleteproCart`,body,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        if(result.success==true){
            setCart(result.data.cart)
           
        }
        getUserCart()
    }
         
}

  return (
    <>

      <Container class1="cart-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="cart-header py-3 d-flex justify-content-between align-items-center">
              <h4 className="cart-col-1">Product</h4>
              <h4 className="cart-col-2">Price</h4>
              <h4 className="cart-col-3">Quantity</h4>
              <h4 className="cart-col-4">Total</h4>
            </div>
            {product?.length>0&& product?.map((product)=>{
                return(
                    <div className="cart-data py-3 mb-2 d-flex justify-content-between align-items-center">
                    <div className="cart-col-1 gap-15 d-flex align-items-center">
                      <div className="w-25">
                        <img src={product.image} className="img-fluid" alt="product image" />
                      </div>
                      <div className="w-75">
                        <p>{product.title}</p>
                       
                      </div>
                    </div>
                    <div className="cart-col-2">
                      <h5 className="price">{product.price}$</h5>
                    </div>
                    <div className="cart-col-3 d-flex align-items-center gap-15">
                      <div>
                        <input
                          className="form-control"
                          type="number"
                          name=""
                          min={1}
                          max={10}
                          id=""
                        />
                      </div>
                      <div>
                        <AiFillDelete onClick={()=>deleteProducFromCart(product)} className="text-danger " />
                      </div>
                    </div>
                    <div className="cart-col-4">
                      <h5 className="price">$ 100</h5>
                    </div>
                  </div>

                )
            })}
            

          </div>
          <div className="col-12 py-2 mt-4">
            <div className="d-flex justify-content-between align-items-baseline">
              <Link to="/product" className="btn btn-dark text-white">
                Continue To Shopping
              </Link>
              <div className="d-flex flex-column align-items-end">
                <h4>SubTotal: $ {cart?.cartTotal}</h4>
                <p>Taxes and shipping calculated at checkout</p>
                <Link to="/checkout" className="button">
                  Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Cart;