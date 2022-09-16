import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Admin, Cart, Categories, Checkout, Favorites, ForgotPassword, Main, SignIn, SignUp, Store } from './pages'
import { CreateCategory } from './pages/admin/categories/create'
import { DeleteCategory } from './pages/admin/categories/delete'
import { EditCategory } from './pages/admin/categories/edit'
import { Products } from './pages/admin/products'
import { CreateProduct } from './pages/admin/products/create'
import { DeleteProduct } from './pages/admin/products/delete'
import { EditProduct } from './pages/admin/products/edit'
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
      <Route path='/admin' element={<Admin />} />
      <Route path='/admin/categories' element={<Categories />} />
      <Route path='/admin/categories/new' element={<CreateCategory />} />
      <Route path='/admin/categories/edit/:id' element={<EditCategory />} />
      <Route path='/admin/categories/delete/:id' element={<DeleteCategory />} />
      <Route path='/admin/products' element={<Products />} />
      <Route path='/admin/products/new' element={<CreateProduct />} />
      <Route path='/admin/products/edit/:id' element={<EditProduct />} />
      <Route path='/admin/products/delete/:id' element={<DeleteProduct />} />
    </Routes>
  </BrowserRouter>
)