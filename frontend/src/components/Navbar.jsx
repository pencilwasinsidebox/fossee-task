import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  { label: 'Home', path: '/' },
  { label: 'Workshop Statistics', path: '/statistics' },
  { label: 'Team Statistics', path: '/teams' },
  { label: 'Workshop Status', path: '/status' },
  { label: 'Workshop Types', path: '/types' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-white border-b border-gray-100 shadow-sm">

      <div className="flex items-center justify-between px-4 h-14">

        <span className="font-bold text-gray-900 tracking-tight">
          FOSSEE <span className="text-[#e85d04]">Workshops</span>
        </span>

        <div className="hidden md:flex items-center gap-1">
          {links.map(link => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `px-3 py-1.5 rounded text-sm transition-colors ${
              isActive
                ? 'text-gray-900 font-medium hover:bg-[#e85d04] hover:text-white'
                : 'text-gray-600 hover:bg-[#e85d04] hover:text-white'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-2 text-gray-600 text-sm">
            <div className="w-7 h-7 rounded-full bg-[#e85d04] text-white text-xs font-medium flex items-center justify-center">
              AK
            </div>
            Aryan Kalra
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-[5px] p-1"
            aria-label="open menu"
          >
            <span className={`block w-5 h-0.5 bg-gray-700 rounded transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block w-5 h-0.5 bg-gray-700 rounded transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-gray-700 rounded transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>
        </div>

      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-gray-100 pb-2 bg-white">
          {links.map(link => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className="block px-5 py-2.5 text-sm text-gray-600 hover:text-gray-900"
            >
              {link.label}
            </NavLink>
          ))}
          <div className="mx-5 my-2 h-px bg-gray-100" />
          <div className="flex items-center gap-2 px-5 py-2 text-gray-500 text-sm">
            <div className="w-6 h-6 rounded-full bg-[#e85d04] text-white text-xs font-medium flex items-center justify-center">
              AK
            </div>
            Aryan Kalra
          </div>
        </div>
      )}

    </nav>
  )
}