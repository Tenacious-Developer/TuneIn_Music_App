import { Link } from 'react-router-dom'
import { useState } from 'react'
import { FaHome, FaMusic, FaHeart, FaHistory } from 'react-icons/fa'

const Sidebar = () => {
  const [expanded, setExpanded] = useState(false)

  return (
    <aside 
      className={`bg-gray-800 p-4 ${expanded ? 'w-64' : 'w-20'} transition-all duration-300`}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      <ul className="space-y-4">
        {[
          { icon: <FaHome />, text: "Home", path: "/" },
          { icon: <FaMusic />, text: "Music", path: "/music" },
          { icon: <FaHeart />, text: "Favorites", path: "/favorites" },
          { icon: <FaHistory />, text: "History", path: "/history" }
        ].map((item) => (
          <li key={item.text}>
            <Link
              to={item.path}
              className="flex items-center gap-3 text-gray-300 hover:text-white p-2 rounded-lg hover:bg-gray-700"
            >
              <span className="text-xl">{item.icon}</span>
              {expanded && item.text}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default Sidebar