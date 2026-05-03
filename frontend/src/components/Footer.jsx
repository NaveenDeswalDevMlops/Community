import { FiMail, FiMapPin } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className='mt-8 border-t border-slate-200 bg-white px-6 py-4'>
      <div className='flex flex-col justify-between gap-3 text-sm text-slate-600 md:flex-row'>
        <p>© 2026 CampusHub • Built for BITS Pilani student community.</p>
        <div className='flex items-center gap-4'>
          <span className='inline-flex items-center gap-1'><FiMapPin />BITS Pilani, Pilani Campus</span>
          <span className='inline-flex items-center gap-1'><FiMail />support@campushub.edu</span>
        </div>
      </div>
    </footer>
  )
}
