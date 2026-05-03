import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import api from '../services/api'
import BookCard from '../components/BookCard'
import FilterBar, { FilterSelect } from '../components/FilterBar'

const cities = ['All India', 'Delhi', 'Mumbai', 'Bangalore', 'Hyderabad', 'Chennai']
const subjects = ['Computer Science', 'Mechanical', 'Electrical', 'Civil']

export default function BooksPage() {
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(true)
  const [tab, setTab] = useState('browse')
  const [filters, setFilters] = useState({ location: 'All India', subject: null, max_price: 1500, type: 'all' })

  const fetchBooks = async () => {
    setLoading(true)
    const params = {
      location: filters.location === 'All India' ? '' : filters.location,
      subject: filters.subject?.value || '',
      max_price: filters.max_price,
    }
    const { data } = await api.get('/books', { params })
    setBooks(data)
    setLoading(false)
  }

  useEffect(() => { fetchBooks() }, [])

  const filtered = useMemo(() => books.filter((b) => (filters.type === 'all' ? true : filters.type === 'donate' ? b.is_donation : !b.is_donation)), [books, filters.type])

  return (
    <div className='space-y-5'>
      <h2 className='text-2xl font-semibold'>Books Marketplace</h2>
      <div className='flex gap-2'>
        {['browse', 'listings', 'requests'].map((key) => <button key={key} onClick={() => setTab(key)} className={`rounded-xl px-4 py-2 text-sm capitalize ${tab === key ? 'bg-indigo-600 text-white' : 'bg-white border border-slate-200'}`}>{key === 'browse' ? 'Browse Books' : key === 'listings' ? 'My Listings' : 'Requests'}</button>)}
      </div>

      {tab === 'browse' && <>
        <FilterBar className='grid gap-4 md:grid-cols-4'>
          <FilterSelect options={cities.map((c) => ({ label: c, value: c }))} value={{ label: filters.location, value: filters.location }} onChange={(v) => setFilters({ ...filters, location: v.value })} />
          <FilterSelect placeholder='Subject' isClearable options={subjects.map((s) => ({ label: s, value: s }))} value={filters.subject} onChange={(v) => setFilters({ ...filters, subject: v })} />
          <div>
            <p className='mb-1 text-xs text-slate-500'>Price: ₹{filters.max_price}</p>
            <input type='range' min='0' max='3000' step='100' value={filters.max_price} onChange={(e) => setFilters({ ...filters, max_price: Number(e.target.value) })} className='w-full accent-indigo-600' />
          </div>
          <div className='flex items-center gap-2'>
            {['all', 'sell', 'donate'].map((type) => <button key={type} onClick={() => setFilters({ ...filters, type })} className={`rounded-lg px-3 py-2 text-sm capitalize ${filters.type === type ? 'bg-indigo-600 text-white' : 'bg-slate-100'}`}>{type}</button>)}
          </div>
          <button className='rounded-xl bg-indigo-600 px-4 py-2 text-white md:col-span-4' onClick={fetchBooks}>Apply Filters</button>
        </FilterBar>

        {loading ? <div className='grid gap-4 md:grid-cols-2 xl:grid-cols-3'>{[...Array(6)].map((_, i) => <div key={i} className='h-48 animate-pulse rounded-xl bg-slate-200' />)}</div> : filtered.length === 0 ? <div className='rounded-xl border border-dashed border-slate-300 bg-white p-8 text-center text-slate-500'>No results found.</div> : <motion.div layout className='grid gap-4 md:grid-cols-2 xl:grid-cols-3'>{filtered.map((b) => <BookCard key={b.id} book={b} />)}</motion.div>}
      </>}
    </div>
  )
}
