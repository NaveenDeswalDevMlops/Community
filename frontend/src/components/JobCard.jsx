import { FiMapPin } from 'react-icons/fi'
import { motion } from 'framer-motion'
import Card from './Card'

export default function JobCard({ job, onRequestReferral }) {
  return (
    <Card className='space-y-3'>
      <div className='flex items-start justify-between gap-2'>
        <div>
          <h3 className='text-lg font-semibold'>{job.title}</h3>
          <p className='text-sm text-slate-600'>{job.company}</p>
        </div>
        {job.referral_available && <span className='rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700'>Referral Available</span>}
      </div>
      <div className='flex items-center gap-4 text-sm text-slate-500'>
        <span className='flex items-center gap-1'><FiMapPin />{job.location}</span>
        <span className='rounded-md bg-slate-100 px-2 py-1 capitalize'>{job.type}</span>
      </div>
      <div className='flex gap-2'>
        <motion.button whileTap={{ scale: 0.97 }} className='rounded-lg bg-indigo-600 px-3 py-1.5 text-sm text-white'>Apply</motion.button>
        <button onClick={() => onRequestReferral(job)} className='rounded-lg border border-indigo-200 bg-indigo-50 px-3 py-1.5 text-sm text-indigo-700'>Request Referral</button>
      </div>
    </Card>
  )
}
