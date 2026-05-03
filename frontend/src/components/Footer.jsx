import { FiExternalLink, FiMail, FiMapPin } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className='mt-8 border-t border-slate-200 bg-white px-6 py-5'>
      <div className='flex flex-col gap-4 text-sm text-slate-600 lg:flex-row lg:items-center lg:justify-between'>
        <div>
          <p className='font-semibold text-slate-800'>CampusHub • BITS Pilani Community Platform</p>
          <p>Helping students exchange books, find jobs, and collaborate on academics.</p>
        </div>
        <div className='flex flex-wrap items-center gap-4'>
          <span className='inline-flex items-center gap-1'><FiMapPin />Pilani, Rajasthan</span>
          <span className='inline-flex items-center gap-1'><FiMail />support@campushub.edu</span>
          <a href='https://bits-pilani-wilp.ac.in/' target='_blank' rel='noreferrer' className='inline-flex items-center gap-1 text-indigo-600'>WILP Website <FiExternalLink /></a>
        </div>
      </div>
    </footer>
  )
}
