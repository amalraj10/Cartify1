import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Swal from 'sweetalert2';

function Cart() {
  const handleClick=()=>{
    Swal.fire({
      title: "Confirm this Order?",
     
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Confirm!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Confirmed!",
          text: "Your have confirmed your order.",
          icon: "success"
        });
      }
    });
  }
  return (
    <div><Navbar className="bg-body-tertiary">
     
    <Navbar.Brand  href={'./'}>
    <h4 className='ms-5'  ><i class="fa-brands fa-opencart me-2"></i> Cartify</h4>
    </Navbar.Brand>

</Navbar>

<div className='mt-5 '><center><h2  style={{color:'#66CDAA'}}>Your treasures await checkout!</h2></center></div>
    
<Row className="container-fluid"  >
    <Col  md={8}>
<Table className='mt-5 w-75 container-fluid
' striped bordered hover>
      <thead >
        <tr  >
          <th style={{color:'#66CDAA'}}><i class="fa-brands fa-opencart "></i> </th>
          <th style={{color:'#66CDAA'}}>Image</th>
          <th style={{color:'#66CDAA'}}>Products</th>
          <th style={{color:'#66CDAA'}}>Price</th>
          <th style={{color:'#66CDAA'}}>Category</th>
          <th style={{color:'#66CDAA'}}>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr >
          <td>1</td>
          <td><img style={{width:'50%'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwES0M2BTt0gkn53MqOlDw_brXariOjicZKw&usqp=CAU" alt="" /></td>
          <td >Otto</td>
          <td>@mdo</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        
      </tbody>
    </Table>
    </Col>
    <Col  md={4}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/66/22/ab/6622ab37c6db6ac166dfec760a2f2939.gif" />
      <Card.Body>
        <Card.Title ><center>Cart Summary</center></Card.Title>
        <Card.Text>
         <p> Total count of products : </p>
         <p>Total Price              :</p>
        </Card.Text>
        <Button  onClick={handleClick } className='d-block mx-auto'  variant="primary">Buy Now</Button>
        
         
        
      </Card.Body>
    </Card>



    </Col>

</Row>
</div>
  )
}

export default Cart