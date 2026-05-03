import { NavLink } from 'react-router-dom'
import { FiBookOpen, FiBriefcase, FiFileText, FiGrid, FiUser } from 'react-icons/fi'

const links = [
  { to: '/', label: 'Dashboard', icon: FiGrid },
  { to: '/books', label: 'Books', icon: FiBookOpen },
  { to: '/materials', label: 'Study Materials', icon: FiFileText },
  { to: '/jobs', label: 'Jobs & Referrals', icon: FiBriefcase },
]

export default function Sidebar() {
  return (
    <aside className='sticky top-0 flex min-h-screen w-72 flex-col justify-between border-r border-slate-200 bg-white p-5'>
      <div>
        <img src='https://www.bits-pilani.ac.in/wp-content/themes/bits/assets/images/bitspilani-logo.png' alt='BITS Pilani' className='mb-3 h-12 object-contain' />
        <h1 className='mb-8 text-2xl font-bold text-indigo-600'>CampusHub</h1>
        <nav className='space-y-1'>
          {links.map(({ to, label, icon: Icon }) => (
            <NavLink key={to} to={to} end={to === '/'} className={({ isActive }) => `flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition ${isActive ? 'bg-indigo-50 text-indigo-700' : 'text-slate-600 hover:bg-slate-100'}`}>
              <Icon /> {label}
            </NavLink>
          ))}
        </nav>
      </div>

      <div className='rounded-xl border border-slate-200 bg-slate-50 p-3'>
        <div className='flex items-center gap-3'>
          <div className='grid h-10 w-10 place-content-center rounded-full bg-indigo-100 text-indigo-700'><FiUser /></div>
          <div>
            <p className='text-sm font-semibold'>Aarav Mehta</p>
            <p className='text-xs text-slate-500'>CSE • 3rd Year</p>
          </div>
        </div>
      </div>
    </aside>
  )
}
