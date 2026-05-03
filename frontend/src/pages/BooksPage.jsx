import { useEffect, useMemo, useState } from 'react'
import api from '../services/api'
import BookCard from '../components/BookCard'
import FilterBar, { FilterSelect } from '../components/FilterBar'

const cities = ['All India', 'Delhi', 'Mumbai', 'Bangalore', 'Hyderabad', 'Chennai']
const subjects = ['Computer Science', 'Mechanical', 'Electrical', 'Civil']

export default function BooksPage() {
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(true)
  const [filters, setFilters] = useState({ location: 'All India', subject: null })
  const fetchBooks = async () => { setLoading(true); const { data } = await api.get('/books'); setBooks(data); setLoading(false) }
  useEffect(() => { fetchBooks() }, [])
  const filtered = useMemo(() => books.filter((b) => (filters.location === 'All India' || b.location === filters.location) && (!filters.subject || b.subject === filters.subject.value)), [books, filters])

  return <section className='mx-auto max-w-7xl px-6 py-20 lg:px-10'><div className='mb-8'><h1 className='text-5xl font-bold text-slate-900'>Books Marketplace</h1><p className='mt-2 text-slate-600'>Find affordable books from your campus network.</p></div>
    <FilterBar className='mb-8 grid gap-4 md:grid-cols-3'>
      <FilterSelect options={cities.map((c) => ({ label: c, value: c }))} value={{ label: filters.location, value: filters.location }} onChange={(v) => setFilters({ ...filters, location: v.value })} />
      <FilterSelect placeholder='Subject' isClearable options={subjects.map((s) => ({ label: s, value: s }))} value={filters.subject} onChange={(v) => setFilters({ ...filters, subject: v })} />
    </FilterBar>
    {loading ? <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>{[...Array(6)].map((_, i) => <div key={i} className='h-64 animate-pulse rounded-2xl bg-slate-200' />)}</div> : <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>{filtered.map((b) => <BookCard key={b.id} book={b} />)}</div>}
  </section>
}
