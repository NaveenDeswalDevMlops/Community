import Select from 'react-select'

const customSelectStyles = {
  control: (base) => ({ ...base, borderRadius: '0.75rem', borderColor: '#E2E8F0', minHeight: '42px' }),
  indicatorSeparator: () => ({ display: 'none' }),
}

export default function FilterBar({ children, className = '' }) {
  return <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm ${className}`}>{children}</div>
}

export function FilterSelect(props) {
  return <Select styles={customSelectStyles} className='text-sm' {...props} />
}
