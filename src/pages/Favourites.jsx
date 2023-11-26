import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col, Row } from 'react-bootstrap';
function Favourites() {
  return (
    <div><Navbar className="bg-body-tertiary">
     
    <Navbar.Brand  href={'./'}>
    <h4 className='ms-5'  ><i class="fa-brands fa-opencart me-2"></i> Cartify</h4>
    </Navbar.Brand>

</Navbar>
 
 <div className='mt-5'>
 <center><h2 style={{color:'#66CDAA'}} >Beloved Must-Haves</h2>
 <p>Discover your favorites, handpicked for you. Explore and save the things you love most. Your wishlist, your desires - all in one place</p>
 </center>


 </div>
 <div className='container'>
 <Row className="container"  >
    <Col  md={3}> 
    <Card className='mt-5 card shadow  ' style={{ width: '18rem'}}>
      <Card.Img variant="top"  className='p-5' src="https://rukminim2.flixcart.com/image/850/1000/xif0q/stuffed-toy/y/w/v/soft-toys-teddy-bear-42-sterling-original-imagzhfc9fybyp4f.jpeg?q=90" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up .
        </Card.Text>
        <div className='d-flex align-items-center justify-content-between'>    <Button  variant="outline-danger btn rounded"><i class="fa-solid fa-trash"></i></Button>
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

export default Favourites