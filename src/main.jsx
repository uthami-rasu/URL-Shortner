import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'


const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[{
      path:"/",
      element:<Home/>
    }]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter}/>
   
  </StrictMode>,
)
