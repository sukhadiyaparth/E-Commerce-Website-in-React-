
import './App.css'
import Nav from './components/NavItems'
import {Outlet} from 'react-router-dom'
import Footer from './home/Footer'

function App() {
 
  return (
    <>
     <Nav/>
     <div className='min-vh-100'>
   <Outlet/>
   </div>
   <Footer/>

    </>
  )
}

export default App
