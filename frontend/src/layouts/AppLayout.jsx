import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function AppLayout() {
  return (
    <div className='flex min-h-screen bg-[#F9FAFB]'>
      <Sidebar />
      <main className='flex min-h-screen flex-1 flex-col'>
        <Header />
        <section className='flex-1 p-6 md:p-8'>
          <Outlet />
        </section>
        <Footer />
      </main>
    </div>
  )
}
