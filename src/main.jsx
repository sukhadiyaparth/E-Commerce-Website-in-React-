import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'swiper/css';
import Home from './home/Home.jsx'


// bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Shop  from './shop/Shop.jsx';
<<<<<<< HEAD
import Blog  from './blog/Blog.jsx';
=======
<<<<<<< HEAD
import Blog  from './blog/Blog.jsx';
=======
import Contact from "./contect-us/Contact.jsx"
import LoginDemo from "./components/LoginDemo.jsx"
>>>>>>> 744cd42 (Create Contectus Page And Authentication in Contexts)
>>>>>>> 168cd00 (Create Contectus Page And Authentication in Contexts)


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
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
import AuthProvider from './contexts/AuthProvider.jsx';

>>>>>>> 744cd42 (Create Contectus Page And Authentication in Contexts)
>>>>>>> 168cd00 (Create Contectus Page And Authentication in Contexts)

const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
    children:[
      {path:"/",element:<Home/>},
      {path:"/shop",element:<Shop/>},
      
      {path:"/shop/:id",element:<Singlepage/>},
<<<<<<< HEAD
      {path:"cart-page",element:<CartPage/>}
=======
<<<<<<< HEAD
      {path:"cart-page",element:<CartPage/>}
=======
      {path:"cart-page",element:<CartPage/>},
      {path:"/contact",element:<Contact/>}

>>>>>>> 744cd42 (Create Contectus Page And Authentication in Contexts)
>>>>>>> 168cd00 (Create Contectus Page And Authentication in Contexts)


    ]
  },
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
  {
    path:"/login",element:<LoginDemo/>
  }
>>>>>>> 744cd42 (Create Contectus Page And Authentication in Contexts)
>>>>>>> 168cd00 (Create Contectus Page And Authentication in Contexts)
]);


ReactDOM.createRoot(document.getElementById('root')).render(
<<<<<<< HEAD
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
=======
<<<<<<< HEAD
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
=======
  // <React.StrictMode>
  //   <RouterProvider router={router} />
  // </React.StrictMode>,

  // Authentication Router

  <AuthProvider > 
<RouterProvider router={router}/>
  </AuthProvider>
>>>>>>> 744cd42 (Create Contectus Page And Authentication in Contexts)
>>>>>>> 168cd00 (Create Contectus Page And Authentication in Contexts)
)
