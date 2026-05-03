import { FiArrowRight, FiBookOpen, FiBriefcase, FiFileText, FiUsers } from 'react-icons/fi'
import { motion } from 'framer-motion'
import Card from '../components/Card'

const stats = [
  { label: 'Books', value: 32, icon: FiBookOpen, gradient: 'from-indigo-500 to-violet-500' },
  { label: 'Materials', value: 54, icon: FiFileText, gradient: 'from-sky-500 to-cyan-500' },
  { label: 'Jobs', value: 11, icon: FiBriefcase, gradient: 'from-amber-500 to-orange-500' },
  { label: 'Referrals', value: 8, icon: FiUsers, gradient: 'from-emerald-500 to-teal-500' },
]

export default function Dashboard() {
  return (
    <div className='space-y-6'>
      <section className='relative overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-700 via-indigo-600 to-violet-600 p-6 text-white shadow-lg'>
        <img src='https://www.bits-pilani.ac.in/wp-content/uploads/2023/08/BITS_Pilani_Main-Building.jpg' alt='BITS Campus' className='absolute inset-0 h-full w-full object-cover opacity-20' />
        <div className='relative z-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between'>
          <div>
            <p className='text-sm text-indigo-100'>BITS Pilani Student Network</p>
            <h2 className='text-3xl font-bold'>Welcome back to CampusHub</h2>
            <p className='mt-1 text-indigo-100'>Discover books, trusted referrals, and curated study materials in one place.</p>
          </div>
          <button className='inline-flex items-center gap-2 self-start rounded-xl bg-white/15 px-4 py-2 text-sm font-medium backdrop-blur hover:bg-white/25'>Explore Opportunities <FiArrowRight /></button>
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

      <Card>
        <h3 className='mb-3 text-lg font-semibold'>Recent Activity</h3>
        <ul className='space-y-2 text-sm text-slate-600'>
          <li className='rounded-lg bg-slate-50 px-3 py-2'>📘 New data science book listed in Bangalore.</li>
          <li className='rounded-lg bg-slate-50 px-3 py-2'>📄 OS question bank uploaded by Priya.</li>
          <li className='rounded-lg bg-slate-50 px-3 py-2'>💼 Internship posted at Acme Labs with referral support.</li>
        </ul>
      </Card>
    </div>
  )
}
