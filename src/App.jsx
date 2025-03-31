
import { Outlet } from 'react-router-dom';
import './App.css'
import Header from './components/Header'

function App() {
  
  return (
    <div className='h-100'>
    <Header/>
    <Outlet/>
    </div>
  )
}

export default App;
