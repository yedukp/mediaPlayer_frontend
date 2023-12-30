import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { addToHistory, deleteVideo } from '../services/allAPI';

function VideoCard({displayVideo, setDeleteVideoStatus}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async() =>{
    setShow(true)

    const {caption, embedLink} = displayVideo
    const today = new Date
    /* console.log(today); */
    let timeStamp = new Intl.DateTimeFormat('en-US', {
      year:'numeric',
      month:'2-digit',
      day:'2-digit',
      hour:'2-digit',
      minute:'2-digit',
      second:'2-digit'
    }).format(today)
    console.log(timeStamp);
    
    let videoDetails = {
      caption,
      embedLink,
      timeStamp
    }
    await addToHistory(videoDetails)
  }


  const removeVideo = async(id)=>{
    const response = await deleteVideo(id)
    console.log(response);
    setDeleteVideoStatus(true)
  }

  const dragStarted = (e,id)=>{
    console.log(`card no:${id} started dragging`);
    //for data transfer
    e.dataTransfer.setData("videoID",id)
  }

  

  return (
    <>
    
    <div className='p-3'>
    <Card style={{ width: '100%', height:"350px ", cursor:"pointer"}} className='mb-4' draggable onDragStart={(e)=>dragStarted(e,displayVideo?.id)}>
      <Card.Img variant="top" src={displayVideo.url} style={{width:"100%", height:"285px", objectFit:"cover"}}  onClick={handleShow}/>
      <Card.Body>
        <Card.Title className='d-flex justify-content-between align-items-center'>
         <h5> {displayVideo.caption}</h5>
         <Button onClick={()=>removeVideo(displayVideo?.id)} className='btn btn-danger'><i class='fa-solid fa-trash-can'></i></Button>
        </Card.Title>
      </Card.Body>
    </Card>


    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{displayVideo.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="514" src={`${displayVideo.embedLink}?autoplay=1`} title={displayVideo.caption} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>


    </div>
    </>
  )
}

export default VideoCard