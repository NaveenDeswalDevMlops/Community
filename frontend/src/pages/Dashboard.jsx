import { motion } from 'framer-motion'
import { FiBookOpen, FiBriefcase, FiFileText, FiUsers } from 'react-icons/fi'
import Card from '../components/Card'

const stats = [
  { label: 'Books', value: 128, icon: FiBookOpen, gradient: 'from-indigo-500 to-violet-500' },
  { label: 'Materials', value: 246, icon: FiFileText, gradient: 'from-cyan-500 to-blue-500' },
  { label: 'Jobs', value: 54, icon: FiBriefcase, gradient: 'from-amber-500 to-orange-500' },
  { label: 'Referrals', value: 39, icon: FiUsers, gradient: 'from-emerald-500 to-teal-500' },
]

const campusImages = [
  'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80',
]

export default function Dashboard() {
  return (
    <div className='space-y-6'>
      <Card hover={false} className='overflow-hidden bg-gradient-to-r from-indigo-600 to-violet-600 text-white'>
        <div className='space-y-4 p-2'>
          <h1 className='text-3xl font-bold md:text-4xl'>CampusHub for BITS Pilani</h1>
          <p className='max-w-2xl text-sm text-indigo-100 md:text-base'>Discover books, exchange study materials, and unlock opportunities through jobs and referrals in one beautifully organized student dashboard.</p>
          <button className='rounded-xl bg-white px-4 py-2 text-sm font-semibold text-indigo-700'>Explore Resources</button>
        </div>
      </Card>

      <div className='overflow-hidden rounded-2xl border border-slate-200 bg-white py-3'>
        <div className='marquee-track flex w-[200%] gap-4 px-3'>
          {[...campusImages, ...campusImages].map((img, idx) => (
            <img key={idx} src={img} alt='Campus life' className='h-36 w-64 rounded-xl object-cover' />
          ))}
        </div>
      </div>

      <div className='grid gap-4 md:grid-cols-2 xl:grid-cols-4'>
        {stats.map(({ label, value, icon: Icon, gradient }) => (
          <motion.div key={label} whileHover={{ scale: 1.02 }}>
            <Card className={`bg-gradient-to-r ${gradient} text-white`}>
              <div className='flex items-center justify-between'>
                <div>
                  <p className='text-sm text-white/90'>{label}</p>
                  <p className='text-3xl font-bold'>{value}</p>
                </div>
                <Icon className='text-2xl' />
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
