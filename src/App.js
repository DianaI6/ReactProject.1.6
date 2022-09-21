import React from 'react';
// import { date } from 'yup';
import './App.css';
import { Route, Routes } from "react-router-dom"
import NotFoundPage from './contactPage/NotFoundPage';
import ProductPage from './product/ProductPage';
import ProductList from './product/ProductList';
import WelcomePage from './contactPage/WelcomePage';
import ProductDetails from './product/ProductDetails';
import LoginPage from './contactPage/LoginPage';
import AuthLayout from './components/AuthLayouth';
import RegisterPage from './contactPage/RegisterPage';



function App() { 

  return (
      <Routes>
        <Route path='/auth'  element={<AuthLayout />}>
          <Route index path='login'  element={<LoginPage />} />
          <Route index path='register'  element={<RegisterPage />} />
        </Route>

        <Route path={''}  element={<WelcomePage/>}></Route>
        <Route path={'/products'}  element={<ProductPage />}>
        <Route  index    element={<ProductList />} />
          <Route path={':id'}  element={<ProductDetails />} />
        </Route>

        <Route path={"*"} element={<NotFoundPage />} />
      </Routes>
  );
}



export default App;
