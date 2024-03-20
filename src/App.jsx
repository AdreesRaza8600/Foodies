import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Success from './Pages/Success'
import Error from './Pages/Error'
import ProtectedRoutes from './Components/ProtectedRoutes'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/success' element={<ProtectedRoutes element={<Success />} />}/>
        <Route path='/*' element={<Error />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
