
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Viewstory from './viewstory.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path:'/Stories/:id/:tot',
    element: <Viewstory />,
  },
  {
    path:'/profile',
    element:<Profile/>
  }


])

createRoot(document.getElementById('root')).render(

    <RouterProvider router={router}/>  
)
