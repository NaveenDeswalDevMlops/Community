import { useEffect, useState } from 'react'
import { FiDownload, FiFileText, FiPlus } from 'react-icons/fi'
import api from '../services/api'
import Card from '../components/Card'

export default function MaterialsPage() {
  const [materials, setMaterials] = useState([])
  const [loading, setLoading] = useState(true)

  const load = async () => {
    setLoading(true)
    const { data } = await api.get('/materials')
    setMaterials(data)
    setLoading(false)
  }

  useEffect(() => { load() }, [])

  return (
    <div className='space-y-5'>
      <div className='flex items-center justify-between'>
        <h2 className='text-2xl font-semibold'>Study Materials</h2>
        <button className='inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2 text-sm text-white'><FiPlus /> Upload Material</button>
      </div>
      {loading ? <div className='grid gap-4 md:grid-cols-2'>{[...Array(4)].map((_, i) => <div key={i} className='h-40 animate-pulse rounded-xl bg-slate-200' />)}</div> : materials.length === 0 ? <Card hover={false} className='p-8 text-center text-slate-500'>No results found.</Card> : <div className='grid gap-4 md:grid-cols-2 xl:grid-cols-3'>{materials.map((m) => <Card key={m.id} className='space-y-3'><div className='flex items-center gap-2 text-indigo-600'><FiFileText /><span className='text-xs font-medium'>PDF</span></div><h3 className='font-semibold'>{m.title}</h3><p className='text-sm text-slate-500'>{m.subject}</p><div className='flex items-center justify-between'><span className='text-sm text-amber-500'>★ 4.6</span><a href={`http://localhost:8000/materials/${m.id}/download`} className='inline-flex items-center gap-1 rounded-lg bg-slate-100 px-3 py-1.5 text-sm'><FiDownload />Download</a></div></Card>)}</div>}
    </div>
  )
}
