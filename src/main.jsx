import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'swiper/css';
import Home from './home/Home.jsx'


// bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Shop  from './shop/Shop.jsx';
import Blog  from './blog/Blog.jsx';


// fonts and icons
import '././assets/css/icofont.min.css';
import '././assets/css/animate.css';
import '././assets/css/style.min.css';





import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Singlepage from './shop/Singlepage.jsx';
import CartPage from './shop/CartPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
    children:[
      {path:"/",element:<Home/>},
      {path:"/shop",element:<Shop/>},
      
      {path:"/shop/:id",element:<Singlepage/>},
      {path:"cart-page",element:<CartPage/>}


    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
