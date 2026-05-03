import { FiBookOpen, FiBriefcase, FiFileText, FiUsers } from 'react-icons/fi'
import { motion } from 'framer-motion'
import Card from '../components/Card'

const stats = [
  { label: 'Books', value: 32, icon: FiBookOpen, gradient: 'from-indigo-500 to-violet-500' },
  { label: 'Materials', value: 54, icon: FiFileText, gradient: 'from-cyan-500 to-blue-500' },
  { label: 'Jobs', value: 11, icon: FiBriefcase, gradient: 'from-amber-500 to-orange-500' },
  { label: 'Referrals', value: 8, icon: FiUsers, gradient: 'from-emerald-500 to-teal-500' },
]

const activity = ['New data science book listed in Bangalore', 'OS question bank uploaded by Priya', 'Internship posted at Acme Labs']

export default function Dashboard() {
  return (
    <div className='space-y-6'>
      <h2 className='text-2xl font-semibold'>Dashboard</h2>
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
        <ul className='space-y-2'>
          {activity.map((item) => <li key={item} className='rounded-lg bg-slate-50 px-3 py-2 text-sm text-slate-600'>{item}</li>)}
        </ul>
      </Card>
    </div>
  )
}
