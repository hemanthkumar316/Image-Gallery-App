import React from 'react'
import GalleryApp from './GalleryApp'
import './App.css'
import { BrowserRouter as Router,Route ,Routes} from 'react-router-dom'
import Images from './Images'
const App = () => {
  return (
    <div className='bg-image'>
    <Router>
      <Routes>
        <Route exact path='/' element={<GalleryApp/>}/>
        <Route exact path='/images/:imageName' element={<Images/>}/>

      </Routes>
    </Router>
    </div>
  )
}

export default App