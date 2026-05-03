import { useState } from 'react'
import { FiLock, FiMail } from 'react-icons/fi'
import Card from '../components/Card'

export default function AdminLoginPage() {
  const [form, setForm] = useState({ email: '', password: '' })

  const submit = (e) => {
    e.preventDefault()
    alert('Admin authentication will be connected to backend securely.')
  }

  return (
    <div className='mx-auto max-w-md py-10'>
      <Card hover={false} className='space-y-4 rounded-2xl p-6 shadow-md'>
        <div className='text-center'>
          <img src='https://www.bits-pilani.ac.in/wp-content/themes/bits/assets/images/bitspilani-logo.png' alt='BITS Pilani' className='mx-auto mb-3 h-14 object-contain' />
          <h2 className='text-2xl font-semibold text-slate-900'>Admin Login</h2>
          <p className='text-sm text-slate-500'>Manage books, jobs, and materials from one secure dashboard.</p>
        </div>
        <form onSubmit={submit} className='space-y-3'>
          <label className='flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2'>
            <FiMail className='text-slate-400' />
            <input type='email' required placeholder='Admin email' className='w-full outline-none' value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
          </label>
          <label className='flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2'>
            <FiLock className='text-slate-400' />
            <input type='password' required placeholder='Password' className='w-full outline-none' value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
          </label>
          <button className='w-full rounded-xl bg-indigo-600 py-2 text-white'>Sign in as Admin</button>
        </form>
      </Card>
    </div>
  )
}
