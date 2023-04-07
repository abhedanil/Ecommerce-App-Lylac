import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import { Link } from 'react-router-dom'
import {IoIosArrowDroprightCircle} from "react-icons/io"
import {IoIosArrowDropleftCircle} from "react-icons/io"
import SpecialProductCard from '../components/SpecialProductCard'
import axios from "axios"
import {Rest} from "../rest"
const Home = () => {

  const[products,setProducts]= useState()
    useEffect(()=>{ 
        getAllProducts() 
    },[]) 
    const getAllProducts=async()=>{
        
        const result= await axios.get(`${Rest}/api/product/getAllProducts`)
        console.log(result);
        setProducts(result.data.products)
    }
    
  return (
    <>
      <section className='home-wrapper-1'>
        <div id="carouselExampleSlidesOnly" class="carousel slide py-5" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item item1 active">
              <img src="images/im3.jpg"></img> 
            </div>
            <div class="carousel-item item2">
              <img src="images/im3.jpg"></img>
            </div>
            <div class="carousel-item item3">
              <img src="images/im3.jpg"></img>
            </div>
          </div>
        </div>
      </section>
      <section className='home-wrapper-2 '>
          <div className="container-xxl">
             <div className="row">
               <div className="col-12 d-flex justify-content-between heading-sec">
                  <div>
                  <h3 className='section-heading'>Best Deals</h3>
                  </div>
                  <div>
                  <Link>View all</Link>
                  </div>
               </div>
               {products?.length>0?(
                <>
                {products?.map((product)=>{
                  return (
                    <ProductCard product={product}/>
                  )
                })}
                </>
               ):(<>
                Please Add some product
               </>)}
              
              
             </div>
          </div>
      </section>
      <section className='home-wrapper-3 classified-products'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-3 d-flex flex-column classified align-items-center ">
              <div className='d-flex   '>
              <h5>Classified <br/>Products on <br/>the week</h5>
              </div>
             
              <div className=''>
                  <IoIosArrowDroprightCircle />
                  <IoIosArrowDropleftCircle />
              </div>
              <div className='my-3 '>
                <button className='btn btn-info  text-white px-3'>Explore
                <span><IoIosArrowDroprightCircle className='' /></span></button>
                
              </div>
            </div>
            {products?.length>0?(
                <>
                {products?.map((product)=>{
                  return (
                    <SpecialProductCard product={product}/>
                  )
                })}
                </>
               ):(<>
                Please Add some product
               </>)}
            
            
          </div>
        </div>
      </section>
      <section className='newsletter'>
                     
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row  align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src="images/newsletter.png" alt="newsletter" />
                <div className="d-flex flex-column">
                  <h2 className="mb-0 text-white">Sign Up for Newsletter</h2>
                  <h6 className='text-white pt-3'>Lorem Ipsum has been the industry's standard dummy text ever since the </h6>
                </div>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Your Email Address"
                  aria-label="Your Email Address"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  <button className='btn btn-dark'>Subscribe</button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      </section>
    </>
  )
}

export default Home
