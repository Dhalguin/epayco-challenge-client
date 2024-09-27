import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './pages/home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import RegisterPage from './pages/register'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
