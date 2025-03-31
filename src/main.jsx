import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'


const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter}/>
   
  </StrictMode>,
)
