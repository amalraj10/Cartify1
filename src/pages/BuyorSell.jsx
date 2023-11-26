import React, { useState } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal'
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2';

function BuyorSell() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClick=()=>{
    Swal.fire({
      title: "Are you Sure?",
     
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Add!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Added!",
          text: "Your have Successfully Added.",
          icon: "success"
        });
      }
    });
  }
  
  return (
    <div>   <Navbar className="bg-body-tertiary">
     
    <Navbar.Brand href={'./'}>
    <h4 className='ms-5' ><i class="fa-brands fa-opencart me-2"></i> Cartify</h4>
    </Navbar.Brand>

</Navbar>
<div className='container'>
<Row className="container mt-5  "  >
<Col  md={3}> </Col>
    <Col  md={3}> <Card className='me-5 card shadow ' style={{ width: '20rem' }}>
      <Card.Img variant="top" src="https://assets-v2.lottiefiles.com/a/5f52011c-1167-11ee-bb7a-87ae82e79a64/WoZMYyosBw.gif" />
      <Card.Body>
      
        <Card.Text>
        Explore our wide range of items.We will guide you through the complete buying Expericence.
        </Card.Text>
        <Link to={'/home'} className='text-decoration-none' > <Button className='d-block mx-auto' variant="primary">Buy Now</Button></Link>
        
      </Card.Body>
    </Card> </Col>
    <Col  md={3}> <Card className='ms-5 card shadow ' style={{ width: '20rem' }}>
      <Card.Img variant="top" src="https://parcamkapinda.com/img/cart.gif" />
      <Card.Body>
      
        <Card.Text>
         We can give you an option to sell your items.Also we will find prospective buyers for you.
        </Card.Text>
      
        <Button onClick={handleShow} className='d-block mx-auto' variant="primary">Sell Now</Button>
      </Card.Body>
    </Card> </Col>
    <Col  md={3}>  </Col>




</Row>
<br /><br />
</div>
<Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title><i class="fa-brands fa-opencart me-2"></i>Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <form action="" className=' w-100 border border-secondary p-3 rounded'>
         <Form.Group className='mb-3 w-100' as={Col} md="4" controlId="validationCustom01">
          <Form.Control
            name="id"
            required
            type="text"
            placeholder="Enter Product Name"
          />
         
        </Form.Group>
       
        <Form.Group    className='mb-3 w-100' as={Col} md="4" controlId="validationCustom01">
          <Form.Control
            name="url"
            required
            type="text"
            placeholder="Enter Product Image URL"
          />
         
        </Form.Group>
        <Form.Group    className='mb-3 w-100' as={Col} md="4" controlId="validationCustom01">
          <Form.Control
            name="embedlink"
            required
            type="text"
            placeholder="Price"
          />
         
        </Form.Group>
        <Form.Group    className='mb-3 w-100' as={Col} md="4" controlId="validationCustom01">
          <Form.Control
            name="embedlink"
            required
            type="text"
            placeholder="Category"
          />
         
        </Form.Group>
        <Dropdown>
      <Dropdown.Toggle  id="dropdown-basic">
        Product Condition
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Excellent</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Good</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Average</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Bad</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

        
         </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
           Cancel
          </Button>
          <Button onClick={handleClick} variant="primary">Upload</Button>
        </Modal.Footer>
      </Modal>



</div>
  )
}

export default BuyorSell