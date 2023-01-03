import React from 'react';
import './index.css';
import { Provider } from './components/axios/axioscontext';
import Login from"./components/Pages/Login";
import Register from "./components/Pages/Register";
// import { Navigate } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ContactPage from './components/ContactPages/ContactPage';
import Protected_route from './components/Pages/protected_route';
function App() {
//   const token=localStorage.getItem("token")
//   console.log(token)
  return (
    <div>
      <BrowserRouter>
        <Provider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register /> } />
               {/* eslint-disable-next-line  */}
               <Route element={<Protected_route/>}/>
            <Route path="/contacts" element={<ContactPage /> } />
          </Routes>
        </Provider>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
