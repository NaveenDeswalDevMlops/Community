import { Link } from 'react-router-dom'
import { FiBell, FiSearch, FiShield, FiUser } from 'react-icons/fi'

export default function Header() {
  return (
    <header className='sticky top-0 z-10 border-b border-slate-200 bg-[#F9FAFB]/95 p-4 backdrop-blur'>
      <div className='mb-2 flex items-center justify-between text-xs text-slate-500'>
        <p>CampusHub • Empowering academic collaboration at BITS Pilani</p>
        <Link to='/admin/login' className='inline-flex items-center gap-1 rounded-lg bg-indigo-50 px-2.5 py-1 font-medium text-indigo-700'><FiShield />Admin Login</Link>
      </div>
      <div className='flex items-center justify-between gap-4'>
        <label className='flex w-full max-w-xl items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2'>
          <FiSearch className='text-slate-400' />
          <input placeholder='Search books, materials, jobs...' className='w-full text-sm outline-none' />
        </label>
        <div className='flex items-center gap-2'>
          <button className='rounded-xl border border-slate-200 bg-white p-2.5 text-slate-600 hover:bg-slate-50'><FiBell /></button>
          <button className='rounded-full bg-indigo-100 p-2.5 text-indigo-700'><FiUser /></button>
        </div>
      </div>
    </header>
  )
}
