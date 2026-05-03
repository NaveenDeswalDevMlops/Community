import { Link } from 'react-router-dom'
import { FiBell, FiSearch, FiShield } from 'react-icons/fi'

export default function Header() {
  return (
    <header className='sticky top-0 z-20 border-b border-slate-200 bg-[#F9FAFB]/95 px-4 py-4 backdrop-blur md:px-8'>
      <div className='flex flex-wrap items-center justify-between gap-3'>
        <div>
          <p className='text-xs text-slate-500'>BITS Pilani Student Platform</p>
          <h2 className='text-lg font-semibold text-slate-900'>Welcome to CampusHub</h2>
        </div>
        <div className='flex items-center gap-2'>
          <label className='hidden w-72 items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 md:flex'>
            <FiSearch className='text-slate-400' />
            <input placeholder='Search resources' className='w-full text-sm outline-none' />
          </label>
          <button className='rounded-xl border border-slate-200 bg-white p-2.5 text-slate-600 hover:bg-slate-50'><FiBell /></button>
          <Link to='/admin/login' className='inline-flex items-center gap-1 rounded-xl bg-indigo-600 px-3 py-2 text-sm font-medium text-white'>
            <FiShield />
            Admin Login
          </Link>
        </div>
      </div>
    </header>
  )
}
