import Select from 'react-select'

const customSelectStyles = {
  control: (base, state) => ({
    ...base,
    borderRadius: 12,
    minHeight: 44,
    borderColor: state.isFocused ? '#4F46E5' : '#E2E8F0',
    boxShadow: 'none',
    ':hover': { borderColor: '#4F46E5' },
  }),
  indicatorSeparator: () => ({ display: 'none' }),
}

export default function FilterBar({ children, className = '' }) {
  return <div className={`rounded-2xl border border-slate-200 bg-white p-4 shadow-sm ${className}`}>{children}</div>
}

export function FilterSelect(props) {
  return <Select styles={customSelectStyles} className='text-sm' {...props} />
}
