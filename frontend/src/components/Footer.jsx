import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className='bg-slate-900 text-slate-300'>
      <div className='mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4 lg:px-10'>
        <div className='space-y-4 md:col-span-2'>
          <img src='https://www.bits-pilani.ac.in/wp-content/themes/bits/assets/images/bitspilani-logo.png' alt='BITS Pilani' className='h-12 w-auto rounded bg-white p-1' />
          <p className='max-w-md text-sm text-slate-400'>A student-first platform to discover books, study materials, internships, and referrals across BITS Pilani communities.</p>
        </div>
        <div>
          <h4 className='mb-4 font-semibold text-white'>Platform</h4>
          <ul className='space-y-2 text-sm'>
            <li><Link to='/books' className='hover:text-white'>Books</Link></li>
            <li><Link to='/materials' className='hover:text-white'>Materials</Link></li>
            <li><Link to='/jobs' className='hover:text-white'>Jobs & Referrals</Link></li>
          </ul>
        </div>
        <div>
          <h4 className='mb-4 font-semibold text-white'>Contact</h4>
          <ul className='space-y-2 text-sm text-slate-400'>
            <li>Pilani, Rajasthan</li>
            <li>support@bitsconnect.edu</li>
            <li>+91 12345 67890</li>
          </ul>
        </div>
      </div>
      <div className='border-t border-slate-800 py-5 text-center text-xs text-slate-500'>© 2026 BITS Campus Connect. All rights reserved.</div>
    </footer>
  )
}
