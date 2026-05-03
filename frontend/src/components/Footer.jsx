export default function Footer() {
  return (
    <footer className='border-t border-slate-200 bg-white px-6 py-5 md:px-8'>
      <div className='flex flex-col justify-between gap-4 md:flex-row md:items-center'>
        <div className='space-y-1'>
          <img src='https://www.bits-pilani.ac.in/wp-content/themes/bits/assets/images/bitspilani-logo.png' alt='BITS Pilani logo' className='h-10 object-contain' />
          <p className='text-sm text-slate-600'>© 2026 CampusHub • Built for the BITS Pilani student ecosystem.</p>
        </div>
        <div className='text-sm text-slate-500'>
          <a className='mr-4 hover:text-indigo-600' href='#'>About</a>
          <a className='mr-4 hover:text-indigo-600' href='#'>Student Resources</a>
          <a className='hover:text-indigo-600' href='#'>Support</a>
        </div>
      </div>
    </footer>
  )
}
