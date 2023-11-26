import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import Navbar from 'react-bootstrap/Navbar';

function LandingPage() {
  return (
    <div >
       <Navbar className="bg-body-tertiary">
     
          <Navbar.Brand href="#home">
          <h4 className='ms-5' ><i class="fa-brands fa-opencart me-2"></i> Cartify</h4>
          </Navbar.Brand>
     
      </Navbar>
    <div className="container">
 <Row className="container mt-5  " style={{}} >

 <Col  md={6}> 
 <h1 className='mt-5 ' style={{fontSize:60}}>Discover <br /> the most suitable items</h1>

<p>Find the best,relable,and cheap items here.  we focus on product quality .Here you find  product   of almost all brands, So why are  you waithing? just order now! </p>
<Link to={'/buyorsell'} className='btn btn-dark rounded'>Get Started <i class="fa-solid fa-arrow-right ms-3"></i></Link>
 </Col>

 <Col  md={6}> 
 <img  style={{width:'100%'}} src="https://cdn.dribbble.com/users/2046015/screenshots/5973727/06-loader_telega.gif" alt="no img" />
</Col>
 </Row>

 </div>
    </div>
  )
}

export default LandingPage