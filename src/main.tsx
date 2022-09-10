import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Favorites, ForgotPassword, Main, SignIn, SignUp } from './pages'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/signin' element={<SignIn />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/password' element={<ForgotPassword />} />
      <Route path='/favorites' element={<Favorites />} />
    </Routes>
  </BrowserRouter>
)