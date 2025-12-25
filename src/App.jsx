import './App.css'
import { MainPage } from './Components/Dashboard'
import { Routes,Route } from 'react-router-dom'
import Contact from './Pages/Contact'
import About from './Pages/About'
import GroceryPage from './Pages/GroceryPage'

function App() {
  

  return (
    <>
    
    <Routes>

      <Route path="" element={<MainPage/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/grocery" element={<GroceryPage/>}/>
    </Routes>
      
    </>
  )
}

export default App
