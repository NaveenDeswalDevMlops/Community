import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function AppLayout({ children }) {
  return (
    <div className='flex min-h-screen bg-[#F9FAFB]'>
      <Sidebar />
      <main className='flex min-h-screen flex-1 flex-col'>
        <Header />
        <div className='flex-1 p-6'>{children}</div>
        <Footer />
      </main>
    </div>
  )
}
