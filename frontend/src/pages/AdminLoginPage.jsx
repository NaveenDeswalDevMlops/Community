import { useState } from 'react'
import { FiLock, FiMail } from 'react-icons/fi'
import { Link } from 'react-router-dom'

export default function AdminLoginPage() {
  const [form, setForm] = useState({ email: '', password: '' })

  const submit = (e) => {
    e.preventDefault()
  }

  return (
    <div className='min-h-screen bg-[#F9FAFB] p-6'>
      <div className='mx-auto max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-sm'>
        <div className='mb-6 text-center'>
          <img src='https://www.bits-pilani.ac.in/wp-content/themes/bits/assets/images/bitspilani-logo.png' alt='BITS Pilani logo' className='mx-auto mb-3 h-14 object-contain' />
          <h1 className='text-2xl font-semibold'>Admin Login</h1>
          <p className='text-sm text-slate-500'>Sign in as administrator for CampusHub control access.</p>
        </div>
        <form onSubmit={submit} className='space-y-3'>
          <label className='flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2'>
            <FiMail className='text-slate-400' />
            <input type='email' required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder='Admin email' className='w-full outline-none' />
          </label>
          <label className='flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2'>
            <FiLock className='text-slate-400' />
            <input type='password' required value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} placeholder='Password' className='w-full outline-none' />
          </label>
          <button className='w-full rounded-xl bg-indigo-600 py-2 font-medium text-white'>Sign in as Admin</button>
        </form>
        <Link to='/' className='mt-4 inline-block text-sm text-indigo-600 hover:underline'>← Back to dashboard</Link>
      </div>
    </div>
  )
}
