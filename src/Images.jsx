import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {useParams } from 'react-router-dom'
const Images = () => {
 const {imageName}=useParams()
 const [images,setImages]=useState([])
 useEffect(()=>{
axios.get(`https://pixabay.com/api/?key=35666760-d8fa8629a4971227cd436cf6b&q=${imageName}&image_type=photo`)
.then(response=>response.data)
// .then(data=>console.log(data.hits))
.then(data=>setImages(data.hits))

 },[imageName])
  return (
    <>
<div className="container-fluid">
 <div className="row justify-content-center">
  <div className="col">
  <h1 className='text-white text-center display-4 mt-3 py-3'> list of {imageName} Images</h1>
{/* <hr className='text-white w-200' /> */}
<hr style={{height:'2px',borderWidth:'5',color:'white',backgroundColor:'white'}}/>

  <div className='row justify-content-center my-3 py-3'>
  {
    images && images.map((image)=>{
     return(
      <div className='col col-md-3'>
      <div className="card mb-5 border border-warning border-5">
       <img src={image.largeImageURL} alt={image.tags} className='card-img'/>
       <div className="card-body">
        <h4 className='card-title'>{image.tags}</h4>
       </div>
      </div>
      </div>
   
     )
    })
   }
  </div>
 
  </div>
 </div>
</div>

    </>
  )
}

export default Images