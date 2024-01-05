import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
   <div className='bg-primary'>
        <div style={{height:'300px'}} className='container w-100 mt-5 '>
        <div className="footer-content  d-flex justify-content-between">
          <div style={{color:'white'}}  className="title w-25">
            <h4 style={{height:'55px'}} className='d-flex'><i style={{height:'45px'}} class="fa-solid fa-truck-fast"></i> E-Cart</h4>
            <span>Designed and build with all the love in the world by the Bootstrap team with the help of our contributors.</span><br/>
           <span> Code licensed HIT, docs CC By 3.0</span><br/>
           <span> Currently v5.3.2.</span>
          </div>
          <div className="links d-flex flex-column">
            <h4 style={{height:'55px',color:'white'}}>Links</h4>
            <Link to={'/'} style={{color:'white'}} className='text-decoration-none'> Home</Link>
            <Link to={'/home'} style={{color:'white'}} className='text-decoration-none'>Cart</Link>
            <Link to={'/history'} style={{color:'white'}} className='text-decoration-none' > Wishlist</Link>
          </div>
          <div className="guides d-flex flex-column ">
          <h4 style={{height:'55px',color:'white'}}>Guides</h4>
            <a style={{color:'white'}} className='text-decoration-none' href="http://react.dev/" target='_blank'>React</a>
            <a style={{color:'white'}} className='text-decoration-none' href="http://react-bootstrap.github.io/" target='_blank'>React Bootstrap</a>
            <a style={{color:'white'}} className='text-decoration-none' href="http://www.w3schools.com/react/react_rounter.asp" target='_blank'>Routing</a>
          </div>
          <div style={{color:'white'}} className="contact">
            <h4 style={{height:'55px'}}>Contact Us</h4>
            <div className='d-flex'>
              <input placeholder='Enter Your Mail' type="text" className="form-control" />
              <button className='btn btn-warning ms-2'><i class="fa-solid fa-arrow-right "></i></button>
            </div>
            <div style={{color:'white'}} className="icons mt-3 d-flex justify-content-between">
            <i style={{height:'55px'}} class="fa-solid fa-envelope fa-2x"></i>
            <i style={{height:'55px'}} class="fa-brands fa-twitter fa-2x"></i>
            <i style={{height:'55px'}} class="fa-brands fa-github fa-2x"></i>
            <i style={{height:'55px'}} class="fa-brands fa-facebook fa-2x"></i>
            <i style={{height:'55px'}} class="fa-brands fa-instagram fa-2x"></i>
            <i style={{height:'55px'}} class="fa-brands fa-linkedin fa-2x"></i>
    
            </div>
          </div>
        </div>
        <p style={{color:'white'}}  className='text-center'>Copyright &copy; 2023 E-Cart, Build With React.</p>
        </div>
   </div>
  )
}

export default Footer