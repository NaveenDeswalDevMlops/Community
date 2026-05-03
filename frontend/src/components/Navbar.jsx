import { Link, NavLink } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/books', label: 'Books' },
  { to: '/materials', label: 'Materials' },
  { to: '/jobs', label: 'Jobs & Referrals' },
]

export default function Navbar() {
  return (
    <header className='sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur'>
      <div className='mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 lg:px-10'>
        <Link to='/' className='flex items-center gap-3'>
          <img src='https://www.bits-pilani.ac.in/wp-content/themes/bits/assets/images/bitspilani-logo.png' alt='BITS Pilani' className='h-10 w-auto object-contain' />
          <div>
            <p className='text-sm font-semibold leading-4 text-slate-900'>BITS Pilani</p>
            <p className='text-xs text-slate-500'>Campus Connect</p>
          </div>
        </Link>

        <nav className='hidden items-center gap-8 md:flex'>
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={({ isActive }) => `text-sm font-semibold transition ${isActive ? 'text-indigo-600' : 'text-slate-600 hover:text-indigo-600'}`}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <Link to='/admin/login' className='inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:scale-[1.02] hover:shadow-lg'>
          Admin Login <FiArrowRight />
        </Link>
      </div>
    </header>
  )
}
