import { FiMapPin, FiUser } from 'react-icons/fi'
import Card from './Card'

export default function BookCard({ book }) {
  return (
    <Card className='space-y-4'>
      <div>
        <h3 className='text-xl font-semibold text-slate-900'>{book.title}</h3>
        <p className='text-sm text-slate-500'>{book.subject}</p>
      </div>
      <div className='space-y-2 text-sm text-slate-600'>
        <p className='flex items-center gap-2'><FiMapPin className='text-indigo-500' />{book.location}</p>
        <p className='flex items-center gap-2'><FiUser className='text-indigo-500' />{book.owner_name || `Student #${book.owner_id}`}</p>
      </div>
      <div className='flex items-center justify-between'>
        <p className='text-lg font-bold text-indigo-600'>{book.is_donation ? 'Donation' : `₹${book.price}`}</p>
        <button className='rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white'>Request</button>
      </div>
    </Card>
  )
}
