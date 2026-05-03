import { Link } from 'react-router-dom'
const links=[['/','Dashboard'],['/books','Books'],['/materials','Study Materials'],['/jobs','Jobs & Referrals']]
export default function Sidebar(){return <aside className='w-64 bg-white border-r min-h-screen p-4'><h1 className='text-xl font-bold mb-4'>CampusHub</h1>{links.map(([to,label])=><Link key={to} to={to} className='block py-2 px-3 rounded hover:bg-slate-100'>{label}</Link>)}</aside>}
