import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import NavBarHome from './Components/NavBarHome'
import SingUp from './Pages/SingUp'
import LogIn from './Pages/LogIn'
import UserPage from './Pages/UserPage'
import { Divider } from '@nextui-org/react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import NavBarUserPage from './Components/NavBarUserPage'
import { Page404 } from './Components/Page404'
import { Privacy } from './Pages/Privacy'
import { Functions } from './Pages/Functions'
import { About } from './Pages/About'

function App () {
  const globalStoreAuth = useSelector(state => state.auth)

  return (

    <>

      {
        globalStoreAuth.userInfo?.username ? <NavBarUserPage /> : <NavBarHome />
      }
      <Divider />

      <main className='flex justify-center items-center p-6'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Privacy' element={<Privacy />} />
          <Route path='/Functions' element={<Functions />} />
          <Route path='/About' element={<About />} />
          <Route path='/SignUp' element={<SingUp />} />
          <Route path='/LogIn' element={<LogIn />} />
          <Route path='UserPage' element={<UserPage />} />
          <Route path='*' element={<Page404 />} />
        </Routes>
      </main>
    </>

  )
}

export default App
