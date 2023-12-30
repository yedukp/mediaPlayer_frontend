import React from 'react'
import { Col, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigateByUrl = useNavigate()
  return (
    <>
      <Row className='mt-5 mb-5 d-flex justify-content-center align-items-center w-100'>
        <Col></Col>
        <Col lg={5}>
          <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
          <p style={{textAlign:"justify"}} className='mt-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit animi facere illo omnis accusantium reiciendis voluptas vel? Iusto pariatur ducimus ex iure accusantium, perspiciatis necessitatibus doloribus vitae veniam suscipit incidunt.</p>
          <button onClick={()=>navigateByUrl('/home')} className='btn btn-warning mt-4'>Get Started <i class="fa-solid fa-arrow-right ms-2"></i></button>
        </Col>
        <Col></Col>
        <Col lg={5}>
          <img src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt=" no img" />
        </Col>
      </Row>

      <div className="container d-flex justify-content-center align-items-center w-100 flex-column">
        <h3>Features</h3>
        <div className=' cards mt-5 mb-5 d-flex justify-content-between align-items-center w-100 '>

        <Card className='p-3' style={{ width: '22rem' }}>
      <Card.Img style={{width:"320px", height:"300px"}} variant="top" src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
      <Card.Body>
        <Card.Title>Managing Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>

    <Card className='p-3' style={{ width: '22rem' }}>
      <Card.Img style={{width:"320px", height:"300px"}} variant="top" src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" />
      <Card.Body>
        <Card.Title>Categorized Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>

    <Card className='p-3' style={{ width: '22rem' }}>
      <Card.Img style={{width:"320px", height:"300px"}} variant="top" src="https://i.pinimg.com/originals/48/c6/12/48c61262980bb7dbf2557940d41c7d0b.gif" />
      <Card.Body>
        <Card.Title>Watch History</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
        </div>
      </div>

      <div className="container border border-2 border-secondary rounded w-100 p-5 mt-5 mb-d d-flex align-items-center justify-content-between">
        <Row>
          <Col lg={5}>
            <h3 className='text-warning mb-4'>Simple, Fast and Powerful</h3>
            <h6 className='mb-3'><span className='fw-bolder fs-5'>Play Everything</span>: Lorem ipsu, esse temporibus omnis iure praesentium voluptas? Explicabo atque odio optio doloremque, tempora numquam.</h6>
            <h6 className='mb-3'><span className='fw-bolder fs-5'>Play Everything</span>:Lorem ipsu, esse temporibus omnis iure praesentium voluptas? Explicabo atque odio optio doloremque, tempora numquam.</h6>
            <h6 className='mb-3'><span className='fw-bolder fs-5'>Play Everything</span>:Lorem ipsu, esse temporibus omnis iure praesentium voluptas? Explicabo atque odio optio doloremque, tempora numquam.</h6>
          </Col>
          <Col></Col>
          <Col lg={6}>
          <iframe width="550" height="350" src="https://www.youtube.com/embed/deQcxldcOog" title="LEO - Lokiverse 2.0 Theme Video | Thalapathy Vijay | Anirudh Ravichander | Lokesh Kanagaraj" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default LandingPage