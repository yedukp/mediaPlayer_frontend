import React, { useState } from 'react'
import Add from '../components/Add'
import { Link } from 'react-router-dom'
import Category from '../components/Category'
import View from '../components/View'

function Home() {
  //create state to do state-lifting
  const [uploadVideoStatus, setUploadVideoStatus] = useState({})
  return (
    <>
    
    <div className='container mt-5 mb-5 d-flex justify-content-between align-items-center'>
      <Add setUploadVideoStatus={setUploadVideoStatus}/>
      <Link to={'/watch-history'}>
      <h4 style={{textDecoration:"none", float:"right"}}>Watch History</h4>
      </Link>
    </div>

    <div className='container-fluid w-100 mt-5 mb-5 d-flex justify-content-between'>
      <div className='all-videos col-lg-9'>
        <h4 className='mb-5'>All Videos</h4>
        <View uploadVideoStatus={uploadVideoStatus}/>
      </div>
      <div className='category col-lg-3'>
        <Category/>
      </div>
    </div>
   
    </>
  )
}

export default Home 