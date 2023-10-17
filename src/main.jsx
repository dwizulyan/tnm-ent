import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import GoodStuff from "./components/GoodStuff";
import Feedback from "./components/Feedback";
import Error from "./components/Error";

import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import "@fontsource/montserrat/100.css";
import "@fontsource/montserrat/200.css";
import "@fontsource/montserrat/300.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";
import "@fontsource/montserrat/800.css";
import "@fontsource/montserrat/900.css";

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<Error/>
  },
  {
    path:"/good-stuff",
    element:<GoodStuff/>,
    errorElement:<Error/>
  },{
    path:"/feedback",
    element:<Feedback/>,
    errorElement:<Error/>
  }
])

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
