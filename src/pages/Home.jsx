import React from 'react'
import { Badge, Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import image3 from '../images/img3.jpg'
import image2 from '../images/img2.jpg'
import image1 from '../images/img1.jpg'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Home() {
  return (
    <div >

<Navbar expand="lg" className="bg-primary fixed-top  ">
    <Container>
      <Navbar.Brand ><Link to={'/'} style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-opencart me-2"></i> Cartify</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link className='btn border rounded border-secondary me-4' ><Link to={'/favourite'} style={{textDecoration:'none',color:'white'}}><i class="fa-solid fa-heart me-2"></i>Favourites <Badge bg="secondary">10</Badge></Link></Nav.Link>
          <Nav.Link className='btn border rounded border-secondary' ><Link to={'/cart'} style={{textDecoration:'none',color:'white'}}><i class="fa-solid fa-cart-shopping me-2"></i>Cart <Badge bg="secondary">10</Badge></Link></Nav.Link>
        
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>



  <Carousel  data-bs-theme="dark">
      <Carousel.Item>
       
        <img 
          className="d-block  w-100"
          src={image2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
      <img 
          className="d-block w-100"
          src={image1}
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image3}
          alt="Third slide"
        />
    
      </Carousel.Item>
    </Carousel>
    <div className='container mt-5'>
        <center><h2><i class="fa-brands fa-opencart me-2"></i> Cartify</h2></center>
        <center> <h1>Expolre Our Products</h1> </center>
       
    <Row className="container   "  >
    <Col  md={3}> 
    <Card className='mt-5 card shadow ' style={{ width: '18rem'}}>
      <Card.Img variant="top" className='p-5' src="https://rukminim2.flixcart.com/image/850/1000/xif0q/stuffed-toy/y/w/v/soft-toys-teddy-bear-42-sterling-original-imagzhfc9fybyp4f.jpeg?q=90" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up .
        </Card.Text>
        <div className='d-flex align-items-center justify-content-between'>    <Button  variant="outline-danger btn rounded"><i class="fa-solid fa-heart"></i></Button>
        <Button variant="primary">Add to Cart</Button>
      </div>
      </Card.Body>
    </Card>
    </Col>
    <Col  md={3}> </Col>
    <Col  md={3}> </Col>
    <Col  md={3}> </Col>

</Row>
    </div>
    </div>
  )
}

export default Home