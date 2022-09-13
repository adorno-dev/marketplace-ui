import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Cart, Checkout, Favorites, ForgotPassword, Main, SignIn, SignUp } from './pages'
import { CheckoutCompleted } from './pages/checkout-completed'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/signin' element={<SignIn />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/password' element={<ForgotPassword />} />
      <Route path='/favorites' element={<Favorites />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/checkout' element={<Checkout />} />
      <Route path='/checkout-completed' element={<CheckoutCompleted />} />
    </Routes>
  </BrowserRouter>
)