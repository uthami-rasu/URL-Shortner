
import { Outlet } from 'react-router-dom';
import './App.css'
import Header from './components/Header'

function App() {
  
  return (
    <div className='w-full h-screen bg-blue-800'>
    <Header/>
    <Outlet/>
    </div>
  )
}

export default App;
