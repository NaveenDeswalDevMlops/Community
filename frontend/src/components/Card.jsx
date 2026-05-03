import { motion } from 'framer-motion'

export default function Card({ className = '', hover = true, children }) {
  const classes = `rounded-2xl border border-slate-100 bg-white p-5 shadow-sm ${className}`

  if (!hover) return <div className={classes}>{children}</div>

  return (
    <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }} className={classes}>
      {children}
    </motion.div>
  )
}
