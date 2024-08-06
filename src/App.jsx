import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import Home from './Pages/Home'
import SignUp from './Pages/SignUp'
import Login from './Pages/Login'
import PageNotFound from './Pages/PageNotFound'
import ProductsList from './Components/ProductsList'

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/products' element={<ProductsList/>}/>  
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='*' element={<PageNotFound/>} />
      </Routes>
    </>
  )
}

export default App
