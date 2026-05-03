import { useEffect, useState } from 'react'
import { FiDownload, FiFileText, FiPlus } from 'react-icons/fi'
import api from '../services/api'
import Card from '../components/Card'

const fallbackMaterials = [
  { id: 1, title: 'DBMS End-Sem Notes', subject: 'Computer Science', file_url: '#' },
  { id: 2, title: 'Thermodynamics Formula Sheet', subject: 'Mechanical', file_url: '#' },
]

export default function MaterialsPage() {
  const [materials, setMaterials] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      setLoading(true)
      try {
        const { data } = await api.get('/materials')
        setMaterials(data?.length ? data : fallbackMaterials)
      } catch {
        setMaterials(fallbackMaterials)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <div className='space-y-5'>
      <div className='flex items-center justify-between'>
        <h2 className='text-2xl font-semibold'>Study Materials</h2>
        <button className='inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2 text-sm text-white'><FiPlus />Upload</button>
      </div>
      {loading ? <div className='grid gap-4 md:grid-cols-2 xl:grid-cols-3'>{[...Array(6)].map((_, i) => <div key={i} className='h-40 animate-pulse rounded-2xl bg-slate-200' />)}</div> : materials.length === 0 ? <Card hover={false} className='p-8 text-center text-slate-500'>No materials found.</Card> : <div className='grid gap-4 md:grid-cols-2 xl:grid-cols-3'>{materials.map((m) => <Card key={m.id} className='space-y-3'><div className='flex items-center gap-2 text-indigo-600'><FiFileText /><span className='text-xs font-medium'>PDF</span></div><h3 className='font-semibold'>{m.title}</h3><p className='text-sm text-slate-500'>{m.subject}</p><div className='flex items-center justify-between'><span className='text-sm text-amber-500'>★ 4.7</span><a href={m.file_url || '#'} className='inline-flex items-center gap-1 rounded-lg bg-slate-100 px-3 py-1.5 text-sm'><FiDownload />Download</a></div></Card>)}</div>}
    </div>
  )
}
