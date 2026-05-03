import { FiBell, FiSearch, FiUser } from 'react-icons/fi'

export default function Header() {
  return (
    <header className='sticky top-0 z-10 border-b border-slate-200 bg-[#F9FAFB]/95 p-4 backdrop-blur'>
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
