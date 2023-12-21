import { BrowserRouter, Route, Routes } from "react-router-dom"
import { AuthProvider } from "./context/AuthContext"
import { ProductProvider } from "./context/ProductContext"

import RegisterPage from "./pages/RegisterPage"
import LoginPage from "./pages/LoginPage"
import ProductsPage from "./pages/ProductsPage"
import ProductFormPage from "./pages/ProductFormPage"
import ProfilePage from "./pages/ProfilePage"
import CartsPage from "./pages/CartsPage"
import HomePage from "./pages/HomePage"

import ProtectedRoute from "./ProtectedRoute"
import Navbar from "./components/Navbar"

function App() {
  return (
    <AuthProvider>
      <ProductProvider>
        <BrowserRouter>
          <main className="container mx-auto px-10">
            <Navbar />
            <Routes>
              <Route path='/' element={<HomePage />}></Route>
              <Route path='/login' element={<LoginPage />}></Route>
              <Route path='/register' element={<RegisterPage />}></Route>

              <Route element={<ProtectedRoute />}>
                <Route path='/products' element={<ProductsPage />}></Route>
                <Route path='/products/:id' element={<ProductFormPage />}></Route>
                <Route path='/add-product' element={<ProductFormPage />}></Route>
                <Route path='/carts' element={<CartsPage />}></Route>
                <Route path='/profile' element={<ProfilePage />}></Route>
              </Route>

            </Routes>
          </main>
        </BrowserRouter>
      </ProductProvider>
    </AuthProvider>
  )
}

export default App