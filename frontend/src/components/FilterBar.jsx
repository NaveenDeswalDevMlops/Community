import Select from 'react-select'

const customSelectStyles = {
  control: (base) => ({ ...base, borderRadius: '0.85rem', borderColor: '#E2E8F0', minHeight: '46px', boxShadow: 'none' }),
  indicatorSeparator: () => ({ display: 'none' }),
}

export default function FilterBar({ children, className = '' }) {
  return <div className={`rounded-2xl border border-slate-200 bg-white p-4 shadow-md ${className}`}>{children}</div>
}

export function FilterSelect(props) {
  return <Select styles={customSelectStyles} className='text-sm' {...props} />
}
