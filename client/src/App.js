import React from 'react';
import './index.css';
import { Provider } from './components/axios/axioscontext';
import Login from"./components/Pages/Login";
import Register from "./components/Pages/Register";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ContactPage from './components/ContactPages/ContactPage';
import Protected_route from './components/Pages/protected_route';
function App() {

  return (
    <div>
      <BrowserRouter>
        <Provider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register /> } />
               <Route element={<Protected_route/>}/>
            <Route path="/contacts" element={<ContactPage /> } />
          </Routes>
        </Provider>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
