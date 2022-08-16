import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './index.css'
import { Categories, Favorites, Index, Products, SignIn, Stores } from './pages'
import { SignUp } from './pages/account/signup'
import { ForgotPassword } from './pages/account/forgot-password'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Index />} />
              <Route path='/categories' element={<Categories />} />
              <Route path='/products' element={<Products />} />
              <Route path='/stores' element={<Stores />} />
              <Route path='/favorites' element={<Favorites />} />
              <Route path='/signin' element={<SignIn />} />
              <Route path='/signup' element={<SignUp />} />
              <Route path='/signout' element={<Index />} />
              <Route path='/forgot-password' element={<ForgotPassword />} />
            </Routes>
          </BrowserRouter>
  // </React.StrictMode>
)