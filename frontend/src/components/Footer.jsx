import { FiExternalLink, FiMail, FiMapPin, FiPhone } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className='mt-8 border-t border-slate-200 bg-gradient-to-r from-white to-indigo-50 px-6 py-6'>
      <div className='flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between'>
        <div className='flex items-center gap-3'>
          <img src='https://www.bits-pilani.ac.in/wp-content/themes/bits/assets/images/bitspilani-logo.png' alt='BITS Pilani logo' className='h-10 object-contain' />
          <div>
            <p className='font-semibold text-slate-800'>CampusHub @ BITS Pilani</p>
            <p className='text-sm text-slate-600'>Academic resources, referrals, and opportunities for students.</p>
          </div>
        </div>
        <div className='flex flex-wrap items-center gap-4 text-sm text-slate-600'>
          <span className='inline-flex items-center gap-1'><FiMapPin />Pilani Campus</span>
          <span className='inline-flex items-center gap-1'><FiPhone />+91 1596 255555</span>
          <span className='inline-flex items-center gap-1'><FiMail />support@campushub.edu</span>
          <a href='https://bits-pilani-wilp.ac.in/' target='_blank' rel='noreferrer' className='inline-flex items-center gap-1 text-indigo-600'>Official WILP <FiExternalLink /></a>
        </div>
      </div>
    </footer>
  )
}
