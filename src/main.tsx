import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './index.css'
import { Categories, Index, Products, SignIn } from './pages'
import { SignUp } from './pages/account/signup'
import { ForgotPassword } from './pages/account/forgot-password'
import { CreateCategory } from './pages/categories/create'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Index />} />
              <Route path='/categories' element={<Categories />} />
              <Route path='/categories/create' element={<CreateCategory />} />
              <Route path='/products' element={<Products />} />
              <Route path='/signin' element={<SignIn />} />
              <Route path='/signup' element={<SignUp />} />
              <Route path='/signout' element={<Index />} />
              <Route path='/forgot-password' element={<ForgotPassword />} />
            </Routes>
          </BrowserRouter>
  // </React.StrictMode>
)