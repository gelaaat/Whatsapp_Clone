import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import NavBarHome from './Components/NavBarHome'
import SingUp from './Pages/SingUp'
import LogIn from './Pages/LogIn'
import UserPage from './Pages/UserPage'
import { Divider } from '@nextui-org/react'

function App () {
  return (

    <>

      <NavBarHome />
      <Divider />

      <main className='flex justify-center items-center p-6'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/SignUp' element={<SingUp />} />
          <Route path='/LogIn' element={<LogIn />} />
          <Route path='UserPage' element={<UserPage />} />
        </Routes>
      </main>
    </>

  )
}

export default App
