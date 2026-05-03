import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function AppLayout({ children }) {
  return (
    <div className='min-h-screen bg-[#F9FAFB]'>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
