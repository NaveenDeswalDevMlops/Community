import { FiMapPin, FiUser } from 'react-icons/fi'
import Card from './Card'

export default function BookCard({ book }) {
  return (
    <Card className='space-y-3'>
      <div>
        <h3 className='text-lg font-semibold text-slate-900'>{book.title}</h3>
        <p className='text-sm text-slate-500'>{book.subject}</p>
      </div>
      <div className='space-y-1 text-sm text-slate-600'>
        <p className='flex items-center gap-2'><FiMapPin className='text-indigo-500' />{book.location}</p>
        <p className='flex items-center gap-2'><FiUser className='text-indigo-500' />{book.owner_name || `Student #${book.owner_id}`}</p>
      </div>
      <div className='flex items-center justify-between'>
        <p className='font-semibold text-indigo-600'>{book.is_donation ? 'Donate' : `₹${book.price}`}</p>
        <div className='flex gap-2'>
          <button className='rounded-lg bg-indigo-600 px-3 py-1.5 text-sm text-white'>Request</button>
          <button className='rounded-lg border border-slate-200 px-3 py-1.5 text-sm'>View Details</button>
        </div>
      </div>
    </Card>
  )
}
