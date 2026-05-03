import { Link } from 'react-router-dom'
import { FiBell, FiSearch, FiShield, FiUser } from 'react-icons/fi'

export default function Header() {
  return (
    <header className='sticky top-0 z-20 border-b border-slate-200 bg-white/95 px-4 py-3 backdrop-blur'>
      <div className='mb-2 flex items-center justify-between'>
        <div className='flex items-center gap-3'>
          <img src='https://www.bits-pilani.ac.in/wp-content/themes/bits/assets/images/bitspilani-logo.png' alt='BITS Pilani logo' className='h-9 object-contain' />
          <div>
            <p className='text-sm font-semibold text-slate-800'>CampusHub</p>
            <p className='text-xs text-slate-500'>BITS Pilani Student Exchange Platform</p>
          </div>
        </div>
        <Link to='/admin/login' className='inline-flex items-center gap-1 rounded-lg bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-700'><FiShield />Admin Login</Link>
      </div>
      <div className='flex items-center justify-between gap-4'>
        <label className='flex w-full max-w-xl items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2'>
          <FiSearch className='text-slate-400' />
          <input placeholder='Search books, materials, jobs...' className='w-full bg-transparent text-sm outline-none' />
        </label>
        <div className='flex items-center gap-2'>
          <button className='rounded-xl border border-slate-200 bg-white p-2.5 text-slate-600 hover:bg-slate-50'><FiBell /></button>
          <button className='rounded-full bg-indigo-100 p-2.5 text-indigo-700'><FiUser /></button>
        </div>
      </div>
    </header>
  )
}
