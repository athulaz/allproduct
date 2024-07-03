import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup';


function Singleview() {

const [view, setView]= useState()

  const params = useParams()
  console.log(params.id);


  const singleData=async ()=>{

    const result = await axios.get(`https://fakestoreapi.com/products/${params.id}`)

    setView(result.data);

  }

  useEffect(()=>{
   singleData()
  },[])
console.log(view);



  return (
    <div>
      { view?.id?
    <Row>
<Col lg={6}>
<img src={view?.image} className='w-100 p-5' style={{height:'600px'}} alt="" />
</Col>

<Col lg={6}>
<ListGroup className='m-5 p-5'>
      <ListGroup.Item> <b> {view?.title} </b> </ListGroup.Item>
      <ListGroup.Item>{view?.category} </ListGroup.Item>
      <ListGroup.Item> <h4> $ : {view?.price} </h4> </ListGroup.Item>
      <ListGroup.Item>{view?.description}</ListGroup.Item>
      <ListGroup.Item>{view?.rating?.rate} <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star-half-stroke"></i>
    <i class="fa-solid fa-star-half-stroke"></i>


      </ListGroup.Item>
    </ListGroup>
</Col>
    
    </Row>

: 
   <div className='text-center m-4 text-success'>
   <i class="fa-solid fa-spinner fa-spin fa-4x"></i>
  </div>
    
    }
    
</div>
  )
}

export default Singleview





