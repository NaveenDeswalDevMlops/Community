import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppLayout from './layouts/AppLayout'
import Dashboard from './pages/Dashboard'
import BooksPage from './pages/BooksPage'
import MaterialsPage from './pages/MaterialsPage'
import JobsPage from './pages/JobsPage'
import AdminLoginPage from './pages/AdminLoginPage'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/books' element={<BooksPage />} />
          <Route path='/materials' element={<MaterialsPage />} />
          <Route path='/jobs' element={<JobsPage />} />
          <Route path='/admin/login' element={<AdminLoginPage />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  </React.StrictMode>,
)
