import { useEffect, useState } from 'react'
import { FiDownload, FiPlus } from 'react-icons/fi'
import api from '../services/api'
import Card from '../components/Card'

export default function MaterialsPage() {
  const [materials, setMaterials] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => { (async () => { const { data } = await api.get('/materials'); setMaterials(data); setLoading(false) })() }, [])
  return <section className='mx-auto max-w-7xl px-6 py-20 lg:px-10'><div className='mb-8 flex items-center justify-between'><div><h1 className='text-5xl font-bold text-slate-900'>Study Materials</h1><p className='mt-2 text-slate-600'>Class notes, cheat sheets, and exam prep documents.</p></div><button className='inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white'><FiPlus />Upload</button></div>
  {loading ? <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>{[...Array(6)].map((_, i) => <div key={i} className='h-52 animate-pulse rounded-2xl bg-slate-200' />)}</div> : <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>{materials.map((m) => <Card key={m.id}><h3 className='text-xl font-semibold'>{m.title}</h3><p className='mt-2 text-slate-500'>{m.subject}</p><a href={`http://localhost:8000/materials/${m.id}/download`} className='mt-6 inline-flex items-center gap-2 rounded-xl bg-slate-100 px-4 py-2 text-sm font-semibold'><FiDownload />Download</a></Card>)}</div>}
  </section>
}
