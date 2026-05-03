import { useState } from 'react'

export default function AdminLoginPage() {
  const [form, setForm] = useState({ email: '', password: '' })
  return <section className='flex min-h-[70vh] items-center justify-center px-6 py-20'><div className='w-full max-w-md rounded-2xl bg-white p-8 shadow-lg'><img src='https://www.bits-pilani.ac.in/wp-content/themes/bits/assets/images/bitspilani-logo.png' alt='BITS Pilani' className='mx-auto mb-4 h-14' /><h1 className='text-center text-3xl font-bold'>Admin Login</h1><p className='mb-6 mt-2 text-center text-sm text-slate-500'>Secure panel for campus moderators.</p><form className='space-y-4'><input className='w-full rounded-xl border border-slate-200 p-3' placeholder='Email' value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} /><input type='password' className='w-full rounded-xl border border-slate-200 p-3' placeholder='Password' value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} /><button className='w-full rounded-xl bg-indigo-600 py-3 font-semibold text-white'>Sign In</button></form></div></section>
}
