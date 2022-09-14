import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Cart, Checkout, Favorites, ForgotPassword, Main, SignIn, SignUp, Store } from './pages'
import { CheckoutCompleted } from './pages/checkout-completed'
import { NewStore } from './pages/store/create'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/signin' element={<SignIn />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/signout' element={<SignIn />} />
      <Route path='/password' element={<ForgotPassword />} />
      <Route path='/favorites' element={<Favorites />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/checkout' element={<Checkout />} />
      <Route path='/checkout-completed' element={<CheckoutCompleted />} />
      <Route path='/store' element={<Store />} />
      <Route path='/store/new' element={<NewStore />} />
    </Routes>
  </BrowserRouter>
)