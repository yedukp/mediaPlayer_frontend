import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { uploadAllVideo } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Add({setUploadVideoStatus}) {

      
      const [show, setShow] = useState(false);

      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);

      const [video, setVideo]=useState({
        id:"",
        caption:"",
        url:"",
        embedLink:""
      })
      console.log(video);

const embedVideoLink = (e)=>{
  const {value} = e.target
  console.log(value.slice(-11));
  const link=`https://www.youtube.com/embed/${value.slice(-11)}`
  setVideo({...video,embedLink:link})
}

const handleUpload = async ()=>{
  const {id,caption,url,embedLink}=video 
  if(!id || !caption || !url || !embedLink){
    toast.warning('Please fill the form completely ')
  }
  else{
    const response = await uploadAllVideo(video)
    console.log(response);
    if(response.status>=200 && response.status<300){
      toast.success(`${response.data.caption} is successfully uploaded`)

      //to change the value of uploadVideoSttus
      setUploadVideoStatus(response.data)

      //making the state value none
      setVideo({
        id:"",
        caption:"",
        url:"",
        embedLink:""
      })
      //to close the modal
      handleClose()
    }
    else{
      console.log(response);
      toast.error('Something went wrong. Try again tomorrow')
    }
  }
}


  return (
    <>
      <div className='d-flex align-items-center '>
          <h5>Upload New Video</h5>
          <button onClick={handleShow} style={{color:"grey", background:"black", border:"hidden", marginLeft:"1px"}}><i class='fa-solid fa-cloud-arrow-up ms-4 fa-2x'></i></button>
      </div>
      <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title><i class="fa-solid fa-film me-2 text-warning"></i> Upload Videos</Modal.Title>
      </Modal.Header>
      <Modal.Body>

        <p>Please fill the following details</p>

        <form className='border border-secondary rounded p-3'>
           <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter Video ID" onChange={(e)=>setVideo({...video,id:e.target.value})}/>
           </Form.Group>
           <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter Video Caption"  onChange={(e)=>setVideo({...video,caption:e.target.value})}/>
           </Form.Group>
           <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter Video Image URL"  onChange={(e)=>setVideo({...video,url:e.target.value})}/>
           </Form.Group>
           <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter Youtube Video Link" onChange={embedVideoLink}/>
           </Form.Group>
        </form>

      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant='outline-warning' onClick={handleUpload}>Upload</Button>
      </Modal.Footer>
    </Modal>
    <ToastContainer position='top-center' theme='colored' autoClose={2000}/>
    </>
  )
}

export default Add

//https://www.youtube.com/embed/FYSBM-ctbSI