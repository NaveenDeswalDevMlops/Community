import { useEffect, useState } from 'react'
import api from '../services/api'
import FilterBar, { FilterSelect } from '../components/FilterBar'
import JobCard from '../components/JobCard'
import Modal from '../components/Modal'

const cities = ['All India', 'Delhi', 'Mumbai', 'Bangalore']

export default function JobsPage() {
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)
  const [city, setCity] = useState('All India')
  const [modalJob, setModalJob] = useState(null)
  const [message, setMessage] = useState('')
  useEffect(() => { (async () => { const { data } = await api.get('/jobs'); setJobs(data); setLoading(false) })() }, [])
  const filtered = jobs.filter((j) => city === 'All India' || j.location === city)

  return <section className='mx-auto max-w-7xl px-6 py-20 lg:px-10'><div className='mb-8'><h1 className='text-5xl font-bold'>Jobs & Referrals</h1><p className='mt-2 text-slate-600'>Opportunity board inspired by modern professional platforms.</p></div>
  <FilterBar className='mb-8 grid md:grid-cols-3'><FilterSelect options={cities.map((c) => ({ label: c, value: c }))} value={{ label: city, value: city }} onChange={(v) => setCity(v.value)} /></FilterBar>
  {loading ? <div className='grid gap-6 md:grid-cols-2'>{[...Array(4)].map((_, i) => <div key={i} className='h-56 animate-pulse rounded-2xl bg-slate-200' />)}</div> : <div className='grid gap-6 md:grid-cols-2'>{filtered.map((j) => <JobCard key={j.id} job={j} onRequestReferral={setModalJob} />)}</div>}
  <Modal open={Boolean(modalJob)} title='Request Referral' onClose={() => setModalJob(null)}><form className='space-y-3'><textarea rows='4' className='w-full rounded-xl border border-slate-200 p-3' placeholder='Why are you a fit?' value={message} onChange={(e) => setMessage(e.target.value)} /><button className='w-full rounded-xl bg-indigo-600 py-2.5 font-semibold text-white'>Submit Request</button></form></Modal>
  </section>
}
