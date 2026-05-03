import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import AppLayout from './layouts/AppLayout'
import Dashboard from './pages/Dashboard'
import BooksPage from './pages/BooksPage'
import MaterialsPage from './pages/MaterialsPage'
import JobsPage from './pages/JobsPage'
import AdminLoginPage from './pages/AdminLoginPage'
import './index.css'

function AppRoutes() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path='/' element={<Dashboard />} />
        <Route path='/books' element={<BooksPage />} />
        <Route path='/materials' element={<MaterialsPage />} />
        <Route path='/jobs' element={<JobsPage />} />
      </Route>
      <Route path='/admin/login' element={<AdminLoginPage />} />
      <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </React.StrictMode>,
)
