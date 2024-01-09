
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Wishlist from './Pages/Wishlist'
import Cart from './Pages/Cart'
import View from './Pages/View'
import Footer from './Components/Footer'

function App() {
  

  return (
    <>
    
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Wishlist' element={<Wishlist/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/View/:id' element={<View/>}/>
        <Route path='/*' element={<Navigate to={'/'}/>}/>
      </Routes>
   <Footer/>
    </>
  )
}

export default App
