import Sidebar from '../components/Sidebar'
import Header from '../components/Header'

export default function AppLayout({ children }) {
  return (
    <div className='flex min-h-screen bg-[#F9FAFB]'>
      <Sidebar />
      <main className='flex-1'>
        <Header />
        <div className='p-6'>{children}</div>
      </main>
    </div>
  )
}
