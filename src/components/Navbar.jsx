import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 flex items-center justify-between">
      <div className="flex items-center gap-8">
        <NavLink to="/" className="text-xl font-bold text-white">TuneIn</NavLink>
        <div className="flex gap-4">
          <NavLink to="/" className={({ isActive }) => 
            `text-gray-300 ${isActive ? 'text-white border-b-2 border-blue-500' : ''}`
          }>
            Home
          </NavLink>
          <NavLink to="/music" className={({ isActive }) => 
            `text-gray-300 ${isActive ? 'text-white border-b-2 border-blue-500' : ''}`
          }>
            Music
          </NavLink>
        </div>
      </div>
      
      <input 
        type="text" 
        placeholder="Search..." 
        className="bg-gray-700 text-white px-4 py-2 rounded-lg w-64" 
      />
    </nav>
  )
}

export default Navbar