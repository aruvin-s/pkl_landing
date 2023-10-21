import Homepage from './pages/Homepage'
import LandForSale from './pages/LandForSale'
import LandDetails from './pages/LandDetails'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/forsale" element={<LandForSale />} />
          <Route exact path='/properties/:id' element={<LandDetails/>} />
        </Routes>
      </div>
    </BrowserRouter>
    </>
  )
}

export default App
