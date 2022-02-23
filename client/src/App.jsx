import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GlobalStyles from './Styles/globals'
import Profile from './Pages/Profile'
import Signin from './Pages/Signin'
import Register from './Pages/Register'

function App() {
  return (
    <div>
      <BrowserRouter>
        <GlobalStyles />
        <Routes>
          <Route path='/' element={<Profile />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
