import React from 'react'
import {Routes,Route, Outlet, Link} from 'react-router-dom'
import Home from './pages/Home'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
     <Navbar />
     <Routes>
      <Route path='/thestreetnest/' element={<Home/>} />
      <Route path='/thestreetnest/collection' element={<Collection/>} />
      <Route path='/thestreetnest/about' element={<About/>} />
      <Route path='/thestreetnest/contact' element={<Contact/>} />
      <Route path='/thestreetnest/product/:productId' element={<Product/>} />
      <Route path='/thestreetnest/cart' element={<Cart/>} />
      <Route path='/thestreetnest/login' element={<Login/>} />
      <Route path='/thestreetnest/place-order' element={<PlaceOrder/>} />
      <Route path='/thestreetnest/orders' element={<Orders/>} />
     </Routes>

     <Link to='/thestreetnest/'>HOME</Link>
     {" | "}
     <Link to="/thestreetnest/collection">COLLECTION</Link> 



      <Outlet />

     <Footer/>
    </div>
  )
}

export default App