import { AnimatePresence, motion } from 'framer-motion'

export default function Modal({ open, title, onClose, children }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div className='fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 p-4' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <motion.div className='w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl' initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }}>
            <div className='mb-4 flex items-center justify-between'>
              <h3 className='text-xl font-semibold'>{title}</h3>
              <button onClick={onClose} className='text-slate-500'>✕</button>
            </div>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
