import { FiArrowRight, FiBookOpen, FiBriefcase, FiFileText, FiUsers } from 'react-icons/fi'
import { motion } from 'framer-motion'
import Card from '../components/Card'

const stats = [
  { label: 'Books', value: 32, icon: FiBookOpen, gradient: 'from-indigo-500 to-violet-500' },
  { label: 'Materials', value: 54, icon: FiFileText, gradient: 'from-sky-500 to-cyan-500' },
  { label: 'Jobs', value: 11, icon: FiBriefcase, gradient: 'from-amber-500 to-orange-500' },
  { label: 'Referrals', value: 8, icon: FiUsers, gradient: 'from-emerald-500 to-teal-500' },
]

const campusImages = [
  'https://www.bits-pilani.ac.in/wp-content/uploads/2023/08/BITS_Pilani_Main-Building.jpg',
  'https://www.bits-pilani.ac.in/wp-content/uploads/2023/08/BITS_Hyderabad_Campus.jpg',
  'https://www.bits-pilani.ac.in/wp-content/uploads/2023/08/BITS_Goa_Campus.jpg',
  'https://www.bits-pilani.ac.in/wp-content/uploads/2023/08/BITS_Dubai_Campus.jpg',
]

export default function Dashboard() {
  return (
    <div className='space-y-6'>
      <section className='rounded-3xl bg-white p-6 shadow-sm'>
        <div className='mb-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between'>
          <div>
            <p className='text-sm font-medium text-indigo-600'>Inspired by modern university template styling</p>
            <h2 className='text-3xl font-bold text-slate-900'>Explore your BITS network on CampusHub</h2>
            <p className='mt-1 text-slate-600'>Find books, internship referrals, and shared resources in a beautifully organized dashboard.</p>
          </div>
          <button className='inline-flex items-center gap-2 self-start rounded-xl bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700'>Get Started <FiArrowRight /></button>
        </div>
        <div className='image-marquee'>
          <div className='image-track'>
            {[...campusImages, ...campusImages].map((src, i) => (
              <img key={`${src}-${i}`} src={src} alt='BITS campus' className='h-40 w-72 rounded-2xl object-cover shadow-md' />
            ))}
          </div>
        </div>
      </section>

      <div className='grid gap-4 md:grid-cols-2 xl:grid-cols-4'>
        {stats.map(({ label, value, icon: Icon, gradient }) => (
          <motion.div key={label} whileHover={{ scale: 1.02 }}>
            <Card className={`bg-gradient-to-r ${gradient} text-white`}>
              <div className='flex items-center justify-between'>
                <div><p className='text-sm text-white/90'>{label}</p><p className='text-3xl font-bold'>{value}</p></div>
                <Icon className='text-2xl text-white/90' />
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
