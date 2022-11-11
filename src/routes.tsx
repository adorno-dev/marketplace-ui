import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Main, SignIn, SignUp, ForgotPassword, Favorites, Cart, Checkout, Store, Admin, Categories } from "./pages"
import { CreateCategory } from "./pages/admin/categories/create"
import { DeleteCategory } from "./pages/admin/categories/delete"
import { EditCategory } from "./pages/admin/categories/edit"
import { CheckoutCompleted } from "./pages/checkout-completed"
import { AuthenticationProvider } from "./contexts/authentication-context"
import { ViewProduct } from "./pages/view-product"
import { ViewStore } from "./pages/view-store"

import { StoreProducts } from "./pages/store/products"
import { CreateProduct } from "./pages/store/products/create"
import { EditProduct } from "./pages/store/products/edit"
import { DeleteProduct } from "./pages/store/products/delete"
import { CreateStore } from "./pages/store/create"
import { Orders } from "./pages/store/orders"
import { DeleteStore } from "./pages/store/delete"

export const AppRoutes = () => {
    return (
      // <React.StrictMode>
        <BrowserRouter>
        <AuthenticationProvider>
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
            <Route path='/store/create' element={<CreateStore />} />
            <Route path='/store/:id/products' element={<StoreProducts />} />
            <Route path='/store/:id/products/create' element={<CreateProduct />} />
            <Route path='/store/products/edit/:id' element={<EditProduct />} />
            <Route path='/store/products/delete/:id' element={<DeleteProduct />} />
            <Route path='/store/:id/orders' element={<Orders />} />
            <Route path='/store/:id/delete' element={<DeleteStore />} />
            
            <Route path='/stores/:id' element={<ViewStore />} />
            <Route path='/products/:id' element={<ViewProduct />} />
            
            <Route path='/admin' element={<Admin />} />
            <Route path='/admin/categories' element={<Categories />} />
            <Route path='/admin/categories/new' element={<CreateCategory />} />
            <Route path='/admin/categories/edit/:id' element={<EditCategory />} />
            <Route path='/admin/categories/delete/:id' element={<DeleteCategory />} />
          </Routes>
        </AuthenticationProvider>
      </BrowserRouter>
      // </React.StrictMode>
    )
}