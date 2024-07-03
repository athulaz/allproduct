import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { Link } from 'react-router-dom';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function Productslist() {

    const [product, setProduct]= useState([])

    const [sdata, setSdata]= useState('')



const fetchData=async()=>{
  const result = await axios.get('https://fakestoreapi.com/products')
  setProduct(result.data);
 }

const search =()=>{
 const data= product.filter (i=>(i.title+i.category).toLowerCase().trim().includes(sdata.toLowerCase().trim()))
 setProduct(data);
}



// const fetchData= async ()=>{
//    const data = await fetch('https://fakestoreapi.com/products') // to store data
//     data.json() // .then(data=>data.json())
//     .then(data=>setProduct(data))
// }


useEffect(()=>{   // fetch is asynchronous method so we can't diretly call in useeffect
    fetchData()
},[sdata])

// console.log(product);
console.log(sdata);
  return (
    <div>
  <Container className='mt-5'>
      <Row>
        <Col lg={6}><img src="https://cdn-icons-png.flaticon.com/128/2331/2331970.png" alt="" />
        
        </Col>
        <Col lg={6}>
        <h5>   Welcome to your shopping world <span className='text-success'> E-cart </span></h5>
           <div>  

            <Row>
              <Col lg={10 }>  
             <FloatingLabel onChange={(e)=>setSdata(e.target.value)} className='w-100 m-2' controlId="floatingPassword" label="Search">
             <Form.Control type="text" placeholder="Search" />
            
             </FloatingLabel>
             </Col>
             <Col lg={2 }> 
             
             <Button onClick={search} className='m-3'> Search </Button>
             </Col>
             </Row>
             </div>
        </Col>
      </Row>
    </Container>
{product.length>0?
<div  className='p-4' >

<Row>

    {

        product.map(i=>(
            <Col lg={3} md={4} sm={6}>
              <Link to={`/view/${i.id}`} style={{textDecoration:'none'}}>
            <Card style={{ width: '18rem' }}>
            <Card.Img style={{height:'300px'}} variant="top" src={i.image} />
            <Card.Body>
              <Card.Title> {i.title.length>35?i.title.slice(0,35)+"...":i.title} </Card.Title>
              <Card.Text>
             
                {i.category}
             
                <h5>$ {i.price}</h5>
          
    <b> Rating: <span className={i.rating.rate >4 ?'text-success':i.rating.rate>3?'text-warning':'text-danger'}> {i.rating.rate}                  
        
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star-half-stroke"></i>
    <i class="fa-solid fa-star-half-stroke"></i>
    </span> 
        </b>   





              </Card.Text>
              <Button variant="primary">Buy Now</Button>
            </Card.Body>
          </Card>
          </Link>
            </Col>
        )

        )
    }
</Row>


</div>
:
<div className='text-center m-4 text-success'>
<i class="fa-solid fa-spinner fa-spin fa-4x"></i>

</div>
}
    </div>
  )
}

export default Productslist
