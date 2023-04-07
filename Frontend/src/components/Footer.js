import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import {AiFillInstagram} from "react-icons/ai"
import {AiFillLinkedin} from "react-icons/ai"
import {AiFillYoutube} from "react-icons/ai"
import {BsTwitter} from "react-icons/bs"
import {FiHeadphones} from "react-icons/fi"
const Footer = () => {
    return (
        <>

           
           
            <footer className='py-4 footer-upper'>
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-3 d-flex flex-column">
                            <div className=" d-flex">
                                <img src='images/preview.jpg ' />
                                <h4>
                                    <Link className='logocolour'>Logo</Link>
                                </h4>
                            </div>
                            <div>
                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the </p>
                            </div>
                            <div className='d-flex align-items-center px-2 gap-15 '>
                                <div className='px-3 py-1 boxes'><AiFillInstagram/></div>
                                <div className='px-3 py-1 boxes'><AiFillLinkedin/></div>
                                <div className='px-3 py-1 boxes'><AiFillYoutube/></div>
                                <div className='px-3 py-1 boxes'><BsTwitter/></div>
                            </div>

                        </div>
                        <div className="col-2">
                            <h4>QUICK LINKS</h4>
                            <div className="footer-links d-flex flex-column">
                                <Link className='footer-link'>Products</Link>
                                <Link className='footer-link'>Classifieds</Link>
                                <Link className='footer-link'>Contact Us</Link>
                                <Link className='footer-link'>Login</Link>
                                <Link className='footer-link'>Signup</Link>
                            </div>
                        </div>
                        <div className="col-2">
                            <h4>CUSTOMER AREA</h4>
                            <div className="footer-links d-flex flex-column">
                                <Link className='footer-link'>My Account</Link>
                                <Link className='footer-link'>Orders</Link>
                                <Link className='footer-link'>Tracking List</Link>
                                <Link className='footer-link'>Terms</Link>
                                <Link className='footer-link'>Privacy Policy</Link>
                                <Link className='footer-link'>Return Policy</Link>
                                <Link className='footer-link'>My cart</Link>

                            </div>
                        </div>
                        <div className="col-2">
                            <h4>VENDOR AREA</h4>
                            <div className="footer-links d-flex flex-column">
                                <Link className='footer-link'>Partner with us</Link>
                                <Link className='footer-link'>Training</Link>
                                <Link className='footer-link'>Procedures</Link>
                                <Link className='footer-link'>Terms</Link>
                                <Link className='footer-link'>Privacy policy</Link>
                            </div>
                        </div>
                        <div className="col-3">
                            <h4>CONTACT</h4>
                            <div>
                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the </p>
                            </div>
                            <div className='d-flex align-items-center px-2 gap-15 '>
                                <div className='py-1 '><FiHeadphones className='earphone'/></div>
                                <div className='d-flex flex-column py-1'>
                                    <h6>Have any question</h6>
                                    <Link>+255454515151</Link>

                                </div>
                                <button className='px-4 py-2 chatbutton'>Chat</button>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

          

        </>
    )
}

export default Footer
