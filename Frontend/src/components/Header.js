import React, { useEffect, useState } from 'react'
import { NavLink, Link,useNavigate } from 'react-router-dom'
import { FiSearch } from "react-icons/fi"
import { AiOutlineHeart } from "react-icons/ai"
import { BsCart4 } from "react-icons/bs"
// import { BiUserCircle } from "react-icons/bi"
import {BsTelephoneFill} from "react-icons/bs"
import {IoIosMail} from "react-icons/io"
import {ImLocation2} from "react-icons/im"
import {FaUserAlt} from "react-icons/fa"
import axios from "axios"
import {Rest} from "../rest"
    const Header = () => {
        const navigate= useNavigate()
        let token
useEffect(()=>{
     token = localStorage.getItem("JwtToken");
},[])
     

        const handleCartClick=()=>{
            const token = localStorage.getItem("JwtToken");
            console.log(token)
            if(token){
                navigate("/cart")
            }
            else{alert("Please login to view the cart")}
        }
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
    return (
        <>
            <header className="header-top-strip py-3  ">
                <div className="container-xxl ">
                    <div className="row ">
                        <div className="col-6 d-flex align-items-center  ">
                            <BsTelephoneFill className='text-white icons '/>
                            <h6 className='text-white numberClass mt-2 '>+555512121</h6>
                            <IoIosMail className='text-white icons'/>
                            <h6 className='text-white px-2 mt-2 '>email@gmaill.com</h6>
                        </div>
                        <div className="col-6 d-flex  align-items-center justify-content-end "> 
                            <ImLocation2 className='text-white icons'/>
                            <span>

                            <h6 className='text-white px-2 location mt-2 '>Location</h6>
                            </span>
                            <div class="dropdown">
                                <a class="btn text-white px-2 d-flex justify-content-center align-items-center  dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                    $Dollar(US)
                                </a>

                                <ul class="dropdown-menu " aria-labelledby="dropdownMenuLink">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>
                            <div class="dropdown">
                                <a class="btn text-white px-2 d-flex justify-content-center align-items-center  dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                   EN
                                </a>

                                <ul class="dropdown-menu " aria-labelledby="dropdownMenuLink">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>


                        </div>
                       

                    </div>
                </div>
            </header>
            <header className='header-upper py-3'>
                <div className="container-xxl">
                    <div className="row align-items-center" >
                        <div className="col-2 d-flex">

                            <img src='images/preview.jpg ' />

                            <h1>

                                <Link to="/"className='logocolour'>Logo</Link>
                            </h1>



                        </div>
                        <div className="col-2">
                            <div class="dropdown">
                                <a class="btn p-2 d-flex justify-content-center align-items-center  dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                    Classifieds
                                </a>

                                <ul class="dropdown-menu " aria-labelledby="dropdownMenuLink">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>

                        </div>
                        <div className="col-3 ">
                            <div class="input-group">
                                <input type="text" class="form-control py-2 " placeholder="Search here..." aria-label="Dollar amount (with dot and two decimal places)" />
                                <span class="input-group-text p-2 fs-3"><FiSearch /></span>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="header-upper-links d-flex align-items-centre ">
                                <div className='px-2 '>
                                    <AiOutlineHeart />
                                </div>
                                <div className='px-2 '>
                                    <div className='d-flex align-items-center '>
                                        <BsCart4 onClick={handleCartClick} />
                                        <span class="badge bg-primary rounded-pill mb-3 bdclass">{product?.length}</span>
                                        <p></p>
                                    </div>

                                </div>
                                <div className='px-2 d-flex align-items-center'>
                                    <FaUserAlt onClick={()=>{navigate("/login")}} />
                    
                                    <div className='d-flex flex-column '>
                                        {!token?(<> 
                                            <button onClick={()=>navigate("/login")} className='btn btn-dark text-white login-logout ml-4'> Login</button>
                                        </>):(<>
                                            <button className='btn btn-dark text-white'> logout</button>
                                        </>)
                                        
                                        }
                                       
                                    </div>
                                </div>
                                <div>

                                </div>
                            </div>
                        </div>
                        <div className="col-2 align-items-end">
                            <button className='btn btn-info text-white py-2 px-4 fs-5 classifield'>
                                Classifieds
                            </button>

                        </div>
                    </div>
                </div>
            </header>
            <header className="header-bottom py-3">
                <div className="container-xxl ">
                    <div className="row">
                        <div className="col-12">
                            <div className="menu-bottom d-flex align-items-center justify-content-center">
                                <div>
                                <div class="dropdown">
                                <a class="btn p-2 d-flex justify-content-center align-items-center  dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                    All Categories
                                </a>

                                <ul class="dropdown-menu gap-30 " aria-labelledby="dropdownMenuLink">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>
                                </div>
                                <div className="menu-links">
                                    <div className="d-flex align-items-center gap-15">
                                        <NavLink>Books</NavLink>
                                        <NavLink>Electronics</NavLink>
                                        <NavLink>Real Estate</NavLink>
                                        <NavLink>Cars-Bikes</NavLink>
                                        <NavLink>Dorm-furniture</NavLink>
                                        <NavLink>Men</NavLink>
                                        <NavLink>women</NavLink>
                                        <NavLink>Music</NavLink>
                                        <NavLink>Hobbies Games</NavLink>
                                        <NavLink>Toys</NavLink>
                                        <NavLink>Kids</NavLink>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
