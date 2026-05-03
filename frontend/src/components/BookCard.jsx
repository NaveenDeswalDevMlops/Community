import { FiMapPin, FiUser } from 'react-icons/fi'
import Card from './Card'

export default function BookCard({ book }) {
  return (
    <Card className='space-y-4'>
      <div>
        <h3 className='text-lg font-semibold text-slate-900'>{book.title}</h3>
        <p className='text-sm text-slate-500'>{book.subject}</p>
      </div>
      <div className='space-y-2 text-sm text-slate-600'>
        <p className='flex items-center gap-2'><FiMapPin className='text-indigo-500' /> {book.location}</p>
        <p className='flex items-center gap-2'><FiUser className='text-indigo-500' /> {book.owner_name}</p>
      </div>
      <div className='flex items-center justify-between'>
        <span className='rounded-full bg-indigo-50 px-3 py-1 text-sm font-semibold text-indigo-700'>{book.is_donation ? 'Donate' : `₹${book.price}`}</span>
        <div className='flex gap-2'>
          <button className='rounded-lg bg-indigo-600 px-3 py-1.5 text-sm text-white'>Request</button>
          <button className='rounded-lg border border-slate-200 px-3 py-1.5 text-sm'>View Details</button>
        </div>
      </div>
    </Card>
  )
}
