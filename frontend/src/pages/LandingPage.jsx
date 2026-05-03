import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiBookOpen, FiBriefcase, FiFileText, FiUsers } from 'react-icons/fi'

const features = [
  { title: 'Books Marketplace', desc: 'Buy, sell, and donate semester books effortlessly.', icon: FiBookOpen },
  { title: 'Study Materials', desc: 'Access notes, previous papers, and curated resources.', icon: FiFileText },
  { title: 'Jobs & Internships', desc: 'Find opportunities shared by alumni and peers.', icon: FiBriefcase },
  { title: 'Referral Network', desc: 'Request warm referrals with streamlined workflows.', icon: FiUsers },
]

export default function LandingPage() {
  return (
    <div>
      <section className='bg-[#F9FAFB]'>
        <div className='mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-2 lg:px-10'>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className='space-y-8'>
            <p className='inline-flex rounded-full bg-indigo-100 px-4 py-1 text-sm font-semibold text-indigo-700'>BITS Student Platform</p>
            <h1 className='text-5xl font-bold leading-tight text-slate-900 lg:text-6xl'>Your campus opportunities, resources, and community in one premium experience.</h1>
            <p className='max-w-xl text-lg text-slate-600'>Discover academic and career support tailored for BITS Pilani students with a modern, fast, and intuitive platform.</p>
            <div className='flex gap-4'>
              <Link to='/books' className='rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white shadow-md'>Explore Marketplace</Link>
              <Link to='/jobs' className='rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700'>Find Jobs</Link>
            </div>
          </motion.div>
          <motion.img initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} src='https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80' alt='Campus students' className='h-full min-h-[420px] w-full rounded-3xl object-cover shadow-lg' />
        </div>
      </section>

      <section className='bg-white py-24'> <div className='mx-auto max-w-7xl px-6 lg:px-10'><div className='mb-10 space-y-3'><h2 className='text-4xl font-bold text-slate-900'>Everything students need.</h2><p className='text-slate-600'>Designed with a clean SaaS experience and campus-focused outcomes.</p></div><div className='grid gap-6 md:grid-cols-2 lg:grid-cols-4'>{features.map(({ title, desc, icon: Icon }) => <div key={title} className='rounded-2xl border border-slate-100 bg-[#F9FAFB] p-6 shadow-md transition hover:scale-[1.02] hover:shadow-lg'><Icon className='mb-4 text-2xl text-indigo-600' /><h3 className='mb-2 text-xl font-semibold'>{title}</h3><p className='text-sm text-slate-600'>{desc}</p></div>)}</div></div></section>

      <section className='bg-[#F9FAFB] py-24'><div className='mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:px-10'><img src='https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80' className='h-[420px] w-full rounded-3xl object-cover shadow-lg' /><div className='space-y-5'><h2 className='text-4xl font-bold text-slate-900'>Purpose-built for BITS Pilani campus life.</h2><p className='text-slate-600'>From first-year students to graduating seniors, Campus Connect supports textbook exchange, material sharing, and career opportunities with consistent design and effortless UX.</p></div></div></section>

      <section className='bg-white py-24'><div className='mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 text-center md:grid-cols-4 lg:px-10'>{[['4K+','Active Students'],['12K+','Material Downloads'],['850+','Books Listed'],['320+','Job Leads']].map(([n,l])=><div key={l}><p className='text-4xl font-bold text-indigo-600'>{n}</p><p className='mt-2 text-slate-500'>{l}</p></div>)}</div></section>

      <section className='bg-gradient-to-r from-indigo-600 to-purple-600 py-20 text-white'><div className='mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 text-center'><h3 className='text-4xl font-bold'>Ready to elevate your campus journey?</h3><p className='text-indigo-100'>Join thousands of BITS students already learning, sharing, and growing.</p><Link to='/materials' className='rounded-xl bg-white px-6 py-3 font-semibold text-indigo-700'>Get Started</Link></div></section>
    </div>
  )
}
