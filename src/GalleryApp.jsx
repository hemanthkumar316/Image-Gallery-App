import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
const GalleryApp = () => {
 const [imageName,setImageName]=useState('')
 const navigate=useNavigate()
  return (
    <>
<div className="container-fluid mt-5" >
 <div className="row ">
  <div className="col col-md-12">
  <h1 className='text-center text-warning display-2 mt-4 mb-5'>IMAGE GALLERY APP</h1>
  {/* <hr className='bg-white'/> */}
  <hr style={{height:'2px',borderWidth:'5',color:'white',backgroundColor:'white'}}/>
   <div className=" text-center py-5 mt-5">
  <h3 className='text-white display-3'>Stunning free images & royality free stock</h3>
<h4 className='text-white mb-3 p-2'> over 2.3 millon images in Gallery app is simple, modern, light and fast photo gallery and picture manager app for viewing and organizing your photos and videos.</h4>
    <input type='search' className='form-control' placeholder='Search...' value={imageName} onChange={(e)=>setImageName(e.target.value)}/> <br /><br />
   <button className='btn btn-primary btn-lg  'onClick={()=> imageName && navigate(`/images/${imageName}`)}>Search</button>

   </div>

  </div>
 </div>
</div>
    </>
  )
}

export default GalleryApp