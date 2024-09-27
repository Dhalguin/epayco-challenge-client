import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './pages/home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import RegisterPage from './pages/register'
import { ActiveClientProvider } from './contexts/activeClient'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <ActiveClientProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </ActiveClientProvider>
  </React.StrictMode>
)
