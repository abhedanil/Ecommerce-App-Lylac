import React from 'react';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home  from "./pages/Home"
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Cart from "./pages/Cart";
function App() {
  return <>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="about"element={<About/>} />
        <Route path="contact" element={<Contact/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="signup" element={<Signup/>}/>
        <Route path="cart" element={<Cart/>} />
      </Route>
    </Routes>
  </BrowserRouter>  
  </>
}

export default App;
