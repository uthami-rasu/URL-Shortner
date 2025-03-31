
import { Outlet } from 'react-router-dom';
import './App.css'
import Header from './components/Header'

function App() {
  
  return (
    <div className='w-full min-h-[100vh] bg-blue-600' >
    <Header/>
    <Outlet/>
    </div>
  )
}

export default App;
