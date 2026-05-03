import { FiMapPin } from 'react-icons/fi'
import Card from './Card'

export default function JobCard({ job, onRequestReferral }) {
  return (
    <Card className='space-y-4'>
      <div className='flex items-start justify-between'>
        <div>
          <h3 className='text-xl font-semibold'>{job.title}</h3>
          <p className='text-slate-600'>{job.company}</p>
        </div>
        <span className='rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700'>{job.type}</span>
      </div>
      <p className='flex items-center gap-2 text-sm text-slate-500'><FiMapPin />{job.location}</p>
      <div className='flex gap-3'>
        <button className='rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white'>Apply</button>
        <button onClick={() => onRequestReferral(job)} className='rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700'>Ask Referral</button>
      </div>
    </Card>
  )
}
