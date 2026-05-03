import { useEffect, useState } from 'react'
import api from '../services/api'
import FilterBar, { FilterSelect } from '../components/FilterBar'
import JobCard from '../components/JobCard'
import Modal from '../components/Modal'

const cities = ['All India', 'Delhi', 'Mumbai', 'Bangalore', 'Hyderabad', 'Chennai']
const roles = ['Frontend Developer', 'Backend Developer', 'Data Analyst', 'Product Intern']
const types = ['intern', 'full-time']
const fallbackJobs = [
  { id: 1, title: 'Frontend Intern', company: 'Acme Labs', location: 'Bangalore', type: 'intern', referral_available: true },
  { id: 2, title: 'Data Analyst', company: 'Insight Corp', location: 'Mumbai', type: 'full-time', referral_available: true },
]

export default function JobsPage() {
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)
  const [filters, setFilters] = useState({ location: 'All India', role: null, type: null })
  const [modalJob, setModalJob] = useState(null)
  const [refForm, setRefForm] = useState({ message: '', resume: null })

  useEffect(() => {
    const load = async () => {
      setLoading(true)
      try {
        const { data } = await api.get('/jobs')
        setJobs(data?.length ? data : fallbackJobs)
      } catch {
        setJobs(fallbackJobs)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  const filteredJobs = jobs.filter((j) => (filters.location === 'All India' || j.location === filters.location) && (!filters.role || j.title.includes(filters.role.value)) && (!filters.type || j.type === filters.type.value))

  const submitReferral = (e) => {
    e.preventDefault()
    setModalJob(null)
    setRefForm({ message: '', resume: null })
  }

  return (
    <div className='space-y-5'>
      <h2 className='text-2xl font-semibold'>Jobs & Referrals</h2>
      <FilterBar className='grid gap-3 md:grid-cols-3'>
        <FilterSelect options={cities.map((c) => ({ label: c, value: c }))} value={{ label: filters.location, value: filters.location }} onChange={(v) => setFilters({ ...filters, location: v.value })} />
        <FilterSelect placeholder='Role' isClearable options={roles.map((r) => ({ label: r, value: r }))} value={filters.role} onChange={(v) => setFilters({ ...filters, role: v })} />
        <FilterSelect placeholder='Job type' isClearable options={types.map((t) => ({ label: t, value: t }))} value={filters.type} onChange={(v) => setFilters({ ...filters, type: v })} />
      </FilterBar>
      {loading ? <div className='grid gap-4 md:grid-cols-2'>{[...Array(4)].map((_, i) => <div key={i} className='h-44 animate-pulse rounded-2xl bg-slate-200' />)}</div> : filteredJobs.length === 0 ? <div className='rounded-2xl border border-dashed bg-white p-8 text-center text-slate-500'>No jobs found.</div> : <div className='grid gap-4 md:grid-cols-2'>{filteredJobs.map((job) => <JobCard key={job.id} job={job} onRequestReferral={setModalJob} />)}</div>}
      <Modal open={Boolean(modalJob)} onClose={() => setModalJob(null)} title={`Request Referral${modalJob ? ` • ${modalJob.title}` : ''}`}>
        <form onSubmit={submitReferral} className='space-y-3'>
          <input type='file' accept='.pdf' required className='w-full rounded-xl border border-slate-200 p-2' onChange={(e) => setRefForm({ ...refForm, resume: e.target.files[0] })} />
          <textarea required rows='4' placeholder='Write a concise message to the referrer...' className='w-full rounded-xl border border-slate-200 p-2' value={refForm.message} onChange={(e) => setRefForm({ ...refForm, message: e.target.value })} />
          <button className='w-full rounded-xl bg-indigo-600 px-4 py-2 text-white'>Submit Request</button>
        </form>
      </Modal>
    </div>
  )
}
